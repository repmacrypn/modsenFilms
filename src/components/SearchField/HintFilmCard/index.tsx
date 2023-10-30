import { memo } from 'react'

import { getImagePath } from '@/utils/helpers/getImagePath'

import { IHintFilmCard } from './interface'
import { FilmCard, FilmImage, FilmInfoWrapper, FilmOverview, FilmTitle } from './styled'

export const HintFilmCard = memo(({ handleSearchedFilmClick, film }: IHintFilmCard) => {
  return (
    <FilmCard onClick={() => handleSearchedFilmClick(film.id)}>
      <FilmImage src={getImagePath(film.backdrop_path, 'poster')} alt={film.title} />
      <FilmInfoWrapper>
        <FilmTitle>{film.title}</FilmTitle>
        <FilmOverview>
          {film.overview || 'Unfortunately there is no film description...'}
        </FilmOverview>
      </FilmInfoWrapper>
    </FilmCard>
  )
})
