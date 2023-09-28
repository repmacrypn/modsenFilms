import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {Genres} from '@/types/genres.interface'

interface InitialState {
  title: string
  genre: Genres
  page: number
}

const initialState: InitialState = {
  genre: Genres.All,
  title: '',
  page: 1
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
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

export const {setGenre, setTitle, setPage} = filmsSlice.actions

export const filmsReducer = filmsSlice.reducer
