import { Film } from '@/types/films'
import { GenreValue } from '@/types/genres.enum'

export interface InitialState {
  films: Film[]
  title: string
  genre: GenreValue | null
  page: number
}
