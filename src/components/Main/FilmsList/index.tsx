import {useMemo} from 'react'

import {Button} from '@/components/Button'
import {SkeletonFilmsLoader} from '@/components/Loader/SkeletonLoader'
import {FilmCard} from '@/components/Main/FilmCard/index'
import {useFilmsControl} from '@/hooks/useFilmsControl'

import {ErrorText} from '@/components/ErrorBoundary/ErrorFallback/styled'
import {Container} from './styled'

export const FilmsList = () => {
  const {page, films, filmsList, isLoading, isFetching, error, handleButtonClick} =
    useFilmsControl()

  const skeletonFilmsArray = useMemo(() => new Array(20).fill({}), [isFetching])

  return (
    <>
      {error && error.code === 'ERR_NETWORK' && (
        <ErrorText>
          Unable to load films. Please try to turn on VPN and reload the page...
        </ErrorText>
      )}
      {!error && films?.results.length === 0 && !isLoading && (
        <ErrorText>There are no films</ErrorText>
      )}
      <Container>
        {filmsList.map((f) => (
          <FilmCard key={f.id} film={f} />
        ))}
        {isFetching && skeletonFilmsArray.map((f, i) => <SkeletonFilmsLoader key={i} />)}
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
