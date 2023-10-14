import {GenreValue} from '@/types/genres.enum'

export const genres: IGenre[] = [
  {id: 1, value: 'All'},
  {id: 2, value: 'Action'},
  {id: 3, value: 'Drama'},
  {id: 4, value: 'Crime'},
  {id: 5, value: 'Romance'},
  {id: 6, value: 'Horror'},
  {id: 7, value: 'Documentary'}
]

type IGenre = {
  id: number
  value: GenreValue
}
