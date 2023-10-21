import {getImagePath} from '@/utils/helpers/getImagePath'

import {IHintFilmCard} from './interface'

import {FilmCard, FilmImage, FilmInfoWrapper, FilmTitle, FilmOverview} from './styled'

export const HintFilmCard = ({handleSearchedFilmClick, film}: IHintFilmCard) => {
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
}
