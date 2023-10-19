import {createApi} from '@reduxjs/toolkit/query/react'

import {FilmsByGenreParams, FilmsByQueryParams, FilmsResponse} from '@/types/films'
import {axiosBaseQuery} from '@/store/services/config/axiosConfig'
import {Genres} from '@/types/genres.enum'
import {FilmTrailerResponse} from '@/types/filmTrailer'

export const filmsApi = createApi({
  reducerPath: 'filmsAPI',
  tagTypes: ['films'],
  baseQuery: axiosBaseQuery,
  keepUnusedDataFor: 180,

  endpoints: (builder) => ({
    fetchFilmsByGenre: builder.query<FilmsResponse, FilmsByGenreParams>({
      query: ({page, genre}) => ({
        method: 'GET',
        url: 'discover/movie',
        params: {
          page,
          with_genres: Genres[genre!],
          include_video: true
        }
      }),
      providesTags: ['films']
    }),

    fetchFilmTrailer: builder.query<FilmTrailerResponse, number>({
      query: (filmId) => ({
        method: 'GET',
        url: `movie/${filmId}/videos`
      }),
      providesTags: (result) => (result ? [{type: 'films', id: result.id}] : ['films'])
    }),

    fetchFilmsByTitle: builder.query<FilmsResponse, FilmsByQueryParams>({
      query: ({page, query}) => ({
        method: 'GET',
        url: `search/movie`,
        params: {
          page,
          query
        }
      }),
      providesTags: (result, err, arg) =>
        result ? [{type: 'films', id: arg.query}] : ['films']
    })
  })
})

export const {
  useFetchFilmsByGenreQuery,
  useFetchFilmTrailerQuery,
  useFetchFilmsByTitleQuery
} = filmsApi
