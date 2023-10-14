import {useEffect, useState} from 'react'

import {useFetchFilmsQuery} from '@/store/services/filmsService'
import {useAppDispatch, useAppSelector} from '@/hooks/useAppHooks'
import {selectFilms, selectGenre, selectPage} from '@/store/selectors/filmsSelectors'
import {addFilms, setPage} from '@/store/slice/filmsSlice'

export const useFilmsControl = () => {
  const dispatch = useAppDispatch()

  const page = useAppSelector(selectPage)
  const genre = useAppSelector(selectGenre)
  const filmsList = useAppSelector(selectFilms)

  const [selectedFilmId, setSelectedFilmId] = useState<number | null>(null)

  const {data: films, isLoading, isFetching, error} = useFetchFilmsQuery({page, genre})

  useEffect(() => {
    const currentFilms = films?.results

    if (currentFilms) {
      dispatch(addFilms(currentFilms))
    }
  }, [films, dispatch])

  const handleButtonClick = () => {
    dispatch(setPage(page + 1))
  }

  const handleFilmClick = (filmId: number) => {
    setSelectedFilmId(filmId)
  }

  const handleModalCloseClick = () => {
    setSelectedFilmId(null)
  }

  return {
    page,
    filmsList,
    films,
    isLoading,
    isFetching,
    error,
    selectedFilmId,
    handleButtonClick,
    handleFilmClick,
    handleModalCloseClick
  }
}
