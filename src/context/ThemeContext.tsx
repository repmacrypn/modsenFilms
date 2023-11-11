import { createContext, ReactNode, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '@/assets/theme/themes'
import { IThemeContext } from '@/types/themeContext.interface'
import { ThemeEnum } from '@/types/themes.enum'
import { getTheme } from '@/utils/helpers/accessStorage'

const defaultTheme: IThemeContext = {
  theme: ThemeEnum.light || ThemeEnum.dark,
  setTheme: () => {},
}

export const ThemeContext = createContext(defaultTheme)

export const Theme = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(getTheme() || ThemeEnum.light)
  const currentTheme = theme === ThemeEnum.light ? lightTheme : darkTheme

  const value = useMemo(() => {
    return { theme, setTheme }
  }, [theme, setTheme])

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  )
}
