import {Film} from '@/types/films'

export interface IHintFilmCard {
  handleSearchedFilmClick: (filmId: number) => void
  film: Film
}
