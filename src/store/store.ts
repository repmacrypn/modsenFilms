import { configureStore } from '@reduxjs/toolkit'

import { filmsApi } from '@/store/services/filmsService'
import { filmsReducer } from '@/store/slice/filmsSlice'

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    films: filmsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
