import {Header} from '@/components/Header/index'
import {Main} from '@/components/Main/index'
import {Footer} from '@/components/Footer/index'
import {Theme} from '@/context/ThemeContext'

import {GlobalStyles, Container} from './styled'

export const App = () => {
  return (
    <Theme>
      <Container>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </Container>
    </Theme>
  )
}
