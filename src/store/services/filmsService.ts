import {createApi} from '@reduxjs/toolkit/query/react'

import {FilmQueryParams, FilmsResponse} from '@/types/films'
import {axiosBaseQuery} from '@/store/services/config/axiosConfig'
import {Genres} from '@/types/genres.interface'

export const filmsApi = createApi({
  reducerPath: 'filmsAPI',
  tagTypes: ['films'],
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    fetchFilms: builder.query<FilmsResponse, FilmQueryParams>({
      query: ({page, genre}) => ({
        method: 'GET',
        url: 'discover/movie',
        params: {
          page,
          with_genres: Genres[genre],
          include_video: true
        }
      }),
      providesTags: ['films']
    })
  })
})

export const {useFetchFilmsQuery} = filmsApi
