import { Film } from '@/types/films'

export interface IFilmCard {
  film: Film
  handleFilmClick: (filmId: number) => void
}
