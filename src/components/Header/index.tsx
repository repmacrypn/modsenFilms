import {SearchField} from '@/components/SearchField/index'
import {Logo} from '@/components/Logo/index'
import {Toggler} from '@/components/Toggler/index'
import {Menu} from '@/components/Menu/index'

import {Container, ThemeWrapper} from './styled'

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
