import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {Film} from '@/types/films'
import {Genres} from '@/types/genres.interface'

interface InitialState {
  films: Film[]
  title: string
  genre: Genres
  page: number
}

const initialState: InitialState = {
  films: [] as Film[],
  genre: Genres.All,
  title: '',
  page: 1
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    addFilms: (state, action: PayloadAction<Film[]>) => {
      state.films = state.films.concat(action.payload)
    },
    setGenre: (state, action: PayloadAction<Genres>) => {
      state.genre = action.payload
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  }
})

export const {setGenre, setTitle, setPage, addFilms} = filmsSlice.actions

export const filmsReducer = filmsSlice.reducer
