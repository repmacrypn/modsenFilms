import {Header} from '@/components/Header/index'
import {Main} from '@/components/Main/index'

import {GlobalStyles, Container} from './styled'

export const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Main />
    </Container>
  )
}
