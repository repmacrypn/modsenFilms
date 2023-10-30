import { Footer } from '@/components/Footer/index'
import { Header } from '@/components/Header/index'
import { Main } from '@/components/Main/index'
import { Theme } from '@/context/ThemeContext'

import { Container, GlobalStyles } from './styled'

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
