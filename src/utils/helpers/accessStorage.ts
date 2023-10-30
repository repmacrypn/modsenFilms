import { LsKey } from '@/types/lsKey.type'
import { ThemeEnum } from '@/types/themes.enum'

// this code hepls us to get access to the theme value from the local storage

export const setThemeToLocalStorage = (key: LsKey, value: ThemeEnum) => {
  localStorage.setItem(key, value)
}

export const getTheme = () => localStorage.getItem('theme')
