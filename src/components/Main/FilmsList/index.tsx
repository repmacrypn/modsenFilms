import noPosterImage from '@/assets/images/noPosterImage.png'
import noPosterPreview from '@/assets/images/noPosterPreview.png'
import {Button} from '@/components/Button'
import {useFetchFilmsQuery} from '@/store/services/filmsService'
import {ErrorText} from '@/components/ErrorBoundary/ErrorFallback/styled'

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
  const {data: films, isLoading, error} = useFetchFilmsQuery()

  if (isLoading) return <div>Loading...</div>

  if (error && error.code === 'ERR_NETWORK') {
    return (
      <ErrorText>
        Unable to load movies. Please try to turn on VPN and reload the page
      </ErrorText>
    )
  }

  return (
    <>
      {!error && films?.results.length === 0 && !isLoading && (
        <ErrorText>There is no movies</ErrorText>
      )}
      <Container>
        {films?.results.map((f) => (
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
      <Button callBack={() => console.log('show motre button!!!')} type='showMoreButton'>
        Show More
      </Button>
    </>
  )
}
