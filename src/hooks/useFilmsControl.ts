import {useEffect, useCallback, useMemo} from 'react'

import {
  useFetchFilmsByGenreQuery,
  useFetchFilmsByTitleQuery
} from '@/store/services/filmsService'
import {useAppDispatch, useAppSelector} from '@/hooks/useAppHooks'
import {
  selectFilms,
  selectGenre,
  selectPage,
  selectTitle
} from '@/store/selectors/filmsSelectors'
import {addFilms, setPage} from '@/store/slice/filmsSlice'

export const useFilmsControl = () => {
  const dispatch = useAppDispatch()

  const page = useAppSelector(selectPage)
  const genre = useAppSelector(selectGenre)
  const query = useAppSelector(selectTitle)
  const filmsList = useAppSelector(selectFilms)

  const {
    data: filmsByGenre,
    isLoading: isLoadingGenre,
    currentData: currentFilmsByGenre,
    isFetching: isFetchingGenre,
    error: errorGenre
  } = useFetchFilmsByGenreQuery({page, genre}, {skip: !genre})

  const {
    data: filmsByQuery,
    isLoading: isLoadingQuery,
    isFetching: isFetchingQuery,
    error: errorQuery
  } = useFetchFilmsByTitleQuery({page, query}, {skip: !query})

  const error = errorGenre || errorQuery
  const isFetching = isFetchingGenre || isFetchingQuery
  const isLoading = isLoadingGenre || isLoadingQuery

  const skeletonFilmsArray = useMemo(() => new Array(20).fill({}), [isFetching])
  let films

  if (genre) films = filmsByGenre
  if (query) films = filmsByQuery

  const handleButtonClick = useCallback(() => {
    dispatch(setPage(page + 1))
  }, [dispatch])

  useEffect(() => {
    let currentFilms

    if (genre && currentFilmsByGenre) currentFilms = filmsByGenre?.results
    if (query) currentFilms = filmsByQuery?.results

    if (currentFilms) {
      dispatch(addFilms(currentFilms))
    }
  }, [filmsByGenre, filmsByQuery, genre, dispatch])

  return {
    page,
    filmsList,
    films,
    isLoading,
    isFetching,
    error,
    skeletonFilmsArray,
    handleButtonClick
  }
}
