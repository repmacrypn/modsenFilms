import {LsKey} from '@/types/lsKey.type'
import {ThemeEnum} from '@/types/themes.enum'

export const setThemeToLocalStorage = (key: LsKey, value: ThemeEnum) => {
  localStorage.setItem(key, value)
}

export const getTheme = () => localStorage.getItem('theme')
