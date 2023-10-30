import { Button } from '@/components/Button'
import { ErrorText } from '@/components/ErrorBoundary/ErrorFallback/styled'
import { SkeletonFilmsLoader } from '@/components/Loader/SkeletonLoader'
import { FilmCard } from '@/components/Main/FilmCard'
import { FilmModal } from '@/components/Modal/FilmModal'
import { useFilmModalControl } from '@/hooks/useFilmModalControl'
import { useFilmsControl } from '@/hooks/useFilmsControl'

import { Container } from './styled'

export const FilmsList = () => {
  const {
    page,
    films,
    filmsList,
    isLoading,
    isFetching,
    error,
    skeletonFilmsArray,
    handleButtonClick,
  } = useFilmsControl()

  const { handleFilmClick, handleModalCloseClick, selectedFilmId } = useFilmModalControl()

  return (
    <>
      {error && <ErrorText>Oops, something went wrong...</ErrorText>}
      {error && error.code === 'ERR_NETWORK' && (
        <ErrorText>
          Unable to load films. Please try to turn on VPN and reload the page...
        </ErrorText>
      )}
      {!error && films?.results.length === 0 && !isLoading && (
        <ErrorText>There are no films on such request...</ErrorText>
      )}
      <Container data-testid='filmsList'>
        {filmsList.map((f) => (
          <FilmCard handleFilmClick={handleFilmClick} key={f.id} film={f} />
        ))}
        {isFetching && skeletonFilmsArray.map((f, i) => <SkeletonFilmsLoader key={i} />)}
        <FilmModal handleModalClick={handleModalCloseClick} filmId={selectedFilmId} />
      </Container>
      <Button
        isActive={
          isLoading ||
          isFetching ||
          films?.total_pages === page ||
          films?.results.length === 0
        }
        callBack={handleButtonClick}
        type='showMoreButton'
      >
        Show More
      </Button>
    </>
  )
}
