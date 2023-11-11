import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Film } from '@/types/films'
import { GenreValue } from '@/types/genres.enum'

import { InitialState } from './filmsSlice.interface'

const initialState: InitialState = {
  films: [] as Film[],
  genre: 'All',
  title: '',
  page: 1,
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    addFilms: (state, action: PayloadAction<Film[]>) => {
      state.films = state.films.concat(action.payload)
    },
    setGenre: (state, action: PayloadAction<GenreValue | null>) => {
      state.genre = action.payload
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    clearFilms: (state) => {
      state.films = initialState.films
    },
    clearFilters: (state) => {
      state.title = initialState.title
      state.page = initialState.page
      state.films = initialState.films
      state.genre = initialState.genre
    },
  },
})

export const { setGenre, setTitle, setPage, addFilms, clearFilters, clearFilms } =
  filmsSlice.actions

export const filmsReducer = filmsSlice.reducer
