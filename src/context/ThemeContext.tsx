import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '@/assets/theme/themes'
import { IThemeContext } from '@/types/themeContext.interface'
import { ThemeEnum } from '@/types/themes.enum'
import { getTheme } from '@/utils/helpers/accessStorage'

const defaultTheme: IThemeContext = {
  theme: ThemeEnum.light,
  setTheme: () => {},
}

export const ThemeContext = createContext(defaultTheme)

export const Theme = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(ThemeEnum.light)
  const currentTheme = theme === ThemeEnum.light ? lightTheme : darkTheme

  useEffect(() => {
    const themeFromLs = getTheme()

    if (themeFromLs) {
      setTheme(themeFromLs as ThemeEnum)
    }
  }, [])

  const value = useMemo(() => {
    return { theme, setTheme }
  }, [theme, setTheme])

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  )
}
