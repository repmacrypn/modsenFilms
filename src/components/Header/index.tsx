import {SearchField} from '@/components/SearchField/index'
import {Logo} from '@/components/Logo/index'
import {Toggler} from '@/components/Toggler/index'

import {Container} from './styled'

export const Header = () => {
  return (
    <Container>
      <Logo />
      <SearchField />
      <Toggler />
    </Container>
  )
}
