import {createApi} from '@reduxjs/toolkit/query/react'

import {FilmsResponse} from '@/types/films'
import {axiosBaseQuery} from '@/store/services/config/axiosConfig'

export const filmsApi = createApi({
  reducerPath: 'filmsAPI',
  tagTypes: ['films'],
  /* keepUnusedDataFor: , */
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    fetchFilms: builder.query<FilmsResponse, void>({
      query: () => ({
        method: 'GET',
        url: 'discover/movie',
        params: {
          page: 1,
          include_video: true
        }
      }),
      providesTags: ['films']
    })
  })
})

export const {useFetchFilmsQuery} = filmsApi
