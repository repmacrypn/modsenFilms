import { memo } from 'react'

import { getImagePath } from '@/utils/helpers/getImagePath'

import { IFilmCard } from './interface'
import {
  AvatarPhoto,
  FilmAuthorYear,
  FilmImage,
  FilmInfoWrapper,
  FilmName,
  FilmWrapper,
} from './styled'

export const FilmCard = memo(({ film, handleFilmClick }: IFilmCard) => {
  return (
    <FilmWrapper onClick={() => handleFilmClick(film.id)} data-testid='filmCard'>
      <FilmImage alt='film preview' src={getImagePath(film.backdrop_path, 'poster')} />
      <FilmInfoWrapper>
        <AvatarPhoto alt='avatar' src={getImagePath(film.backdrop_path, 'preview')} />
        <div>
          <FilmName>{film.title || 'Film Name was not found'}</FilmName>
          <FilmAuthorYear>
            Rating: {film.vote_average} • {film.release_date.slice(0, 4)}
          </FilmAuthorYear>
        </div>
      </FilmInfoWrapper>
    </FilmWrapper>
  )
})
