import { memo } from 'react'

import { ErrorText } from '@/components/ErrorBoundary/ErrorFallback/styled'
import { Loader } from '@/components/Loader/AppLoader/styled'
import { FilmModal } from '@/components/Modal/FilmModal'
import { HintFilmCard } from '@/components/SearchField/HintFilmCard'
import { useFilmModalControl } from '@/hooks/useFilmModalControl'
import { useFetchFilmsByTitleQuery } from '@/store/services/filmsService'

import { IHintModal } from './interface'
import { Container, TotalFilmsCount } from './styled'

export const HintModal = memo(({ searchValue }: IHintModal) => {
  const {
    data: filmsByQuery,
    isFetching,
    error,
    currentData: currentFilmsByQuery,
  } = useFetchFilmsByTitleQuery({ page: 1, query: searchValue }, { skip: !searchValue })

  const { handleFilmClick, handleModalCloseClick, selectedFilmId } = useFilmModalControl()

  return (
    <>
      <Container data-testid='hintModal'>
        {isFetching && <Loader />}
        {error && <ErrorText>Oops, something went wrong...</ErrorText>}
        {currentFilmsByQuery &&
          filmsByQuery?.results.map((f) => (
            <HintFilmCard key={f.id} handleSearchedFilmClick={handleFilmClick} film={f} />
          ))}
        {currentFilmsByQuery && !isFetching && filmsByQuery?.results && (
          <TotalFilmsCount>
            Total films count: {filmsByQuery?.total_results}
          </TotalFilmsCount>
        )}
      </Container>
      <FilmModal handleModalClick={handleModalCloseClick} filmId={selectedFilmId} />
    </>
  )
})
