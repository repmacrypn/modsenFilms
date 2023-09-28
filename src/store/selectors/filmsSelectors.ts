import {RootState} from '@/store/store'

export const selectPage = (state: RootState) => state.films.page
export const selectGenre = (state: RootState) => state.films.genre
export const selectTitle = (state: RootState) => state.films.title
