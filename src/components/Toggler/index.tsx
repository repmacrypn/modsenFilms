import {useCallback} from 'react'

import {setThemeToLocalStorage} from '@/utils/helpers/accessStorage'
import {ThemeEnum} from '@/types/themes.enum'
import {useTheme} from '@/hooks/useTheme'

import {Container, ToggleItem} from './styled'

export const Toggler = () => {
  const {theme, setTheme} = useTheme()

  const handleToggleChange = useCallback(() => {
    const rulesTheme = theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light

    setThemeToLocalStorage('theme', rulesTheme)
    setTheme(rulesTheme)
  }, [theme])

  return (
    <Container data-testid='togglerWrapper' onClick={handleToggleChange}>
      <ToggleItem data-testid='toggler' themeValue={theme} />
    </Container>
  )
}
