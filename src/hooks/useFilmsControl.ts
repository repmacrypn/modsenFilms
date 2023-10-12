import {useEffect} from 'react'

import {useFetchFilmsQuery} from '@/store/services/filmsService'
import {useAppDispatch, useAppSelector} from '@/hooks/useAppHooks'
import {selectFilms, selectGenre, selectPage} from '@/store/selectors/filmsSelectors'
import {addFilms, setPage} from '@/store/slice/filmsSlice'

export const useFilmsControl = () => {
  const dispatch = useAppDispatch()

  const page = useAppSelector(selectPage)
  const genre = useAppSelector(selectGenre)
  const filmsList = useAppSelector(selectFilms)

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

  return {
    page,
    filmsList,
    films,
    isLoading,
    isFetching,
    error,
    handleButtonClick
  }
}
