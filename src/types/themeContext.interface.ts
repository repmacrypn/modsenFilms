import {ThemeEnum} from '@/types/themes.enum'

export interface IThemeContext {
  theme: ThemeEnum
  setTheme: (theme: ThemeEnum) => void
}
