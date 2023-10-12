import noPosterImage from '@/assets/images/noPosterImage.png'
import noPosterPreview from '@/assets/images/noPosterPreview.png'

import {Film} from '@/types/films'

import {
  AvatarPhoto,
  FilmAuthorYear,
  FilmImage,
  FilmInfoWrapper,
  FilmName,
  FilmWrapper
} from './styled'

export const FilmCard = ({film}: {film: Film}) => {
  return (
    <FilmWrapper>
      <FilmImage
        alt='film preview'
        src={
          film.backdrop_path
            ? `https://image.tmdb.org/t/p/w780${film.backdrop_path}`
            : noPosterImage
        }
      />
      <FilmInfoWrapper>
        <AvatarPhoto
          alt='avatar'
          src={
            film.backdrop_path
              ? `https://image.tmdb.org/t/p/w780${film.backdrop_path}`
              : noPosterPreview
          }
        />
        <div>
          <FilmName>{film.title || "Film Name wasn't found"}</FilmName>
          <FilmAuthorYear>
            Rating: {film.vote_average} • {film.release_date.slice(0, 4)}
          </FilmAuthorYear>
        </div>
      </FilmInfoWrapper>
    </FilmWrapper>
  )
}