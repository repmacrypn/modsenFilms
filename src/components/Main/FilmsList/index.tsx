import {useEffect} from 'react'

import noPosterImage from '@/assets/images/noPosterImage.png'
import noPosterPreview from '@/assets/images/noPosterPreview.png'
import {Button} from '@/components/Button'
import {useFetchFilmsQuery} from '@/store/services/filmsService'
import {ErrorText} from '@/components/ErrorBoundary/ErrorFallback/styled'
import {useAppDispatch, useAppSelector} from '@/hooks/useAppHooks'
import {selectFilms, selectGenre, selectPage} from '@/store/selectors/filmsSelectors'
import {addFilms, setPage} from '@/store/slice/filmsSlice'

import {
  AvatarPhoto,
  Container,
  FilmAuthorYear,
  FilmCard,
  FilmImage,
  FilmInfoWrapper,
  FilmName
} from './styled'

export const FilmsList = () => {
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

  if (isLoading) return <div>Loading...</div>

  if (error && error.code === 'ERR_NETWORK') {
    return (
      <ErrorText>
        Unable to load films. Please try to turn on VPN and reload the page
      </ErrorText>
    )
  }

  return (
    <>
      {!error && films?.results.length === 0 && !isLoading && (
        <ErrorText>There are no films</ErrorText>
      )}
      <Container>
        {filmsList.map((f) => (
          <FilmCard key={f.id}>
            <FilmImage
              alt='film preview'
              src={
                f.backdrop_path
                  ? `https://image.tmdb.org/t/p/w780${f.backdrop_path}`
                  : noPosterImage
              }
            />
            <FilmInfoWrapper>
              <AvatarPhoto
                alt='avatar'
                src={
                  f.backdrop_path
                    ? `https://image.tmdb.org/t/p/w780${f.backdrop_path}`
                    : noPosterPreview
                }
              />
              <div>
                <FilmName>{f.title || "Film Name wasn't found"}</FilmName>
                <FilmAuthorYear>
                  Rating: {f.vote_average} • {f.release_date.slice(0, 4)}
                </FilmAuthorYear>
              </div>
            </FilmInfoWrapper>
          </FilmCard>
        ))}
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
