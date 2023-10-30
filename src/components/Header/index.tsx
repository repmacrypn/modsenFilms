import { Logo } from '@/components/Logo'
import { Menu } from '@/components/Menu'
import { SearchField } from '@/components/SearchField'
import { Toggler } from '@/components/Toggler'

import { Container, ThemeWrapper } from './styled'

export const Header = () => {
  return (
    <Container>
      <Logo />
      <SearchField />
      <ThemeWrapper>
        <Toggler />
      </ThemeWrapper>
      <Menu />
    </Container>
  )
}
