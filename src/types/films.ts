import {GenreValue} from '@/types/genres.interface'

export interface FilmsResponse {
  total_pages: number
  total_results: number
  page: number
  results: Film[]
}

export interface Film {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface FilmQueryParams {
  page: number
  genre: GenreValue
}
