import {useState} from 'react'

import {Container, ToggleItem} from './styled'

export const Toggler = () => {
  const [theme, setTheme] = useState(false)

  return (
    <Container onClick={() => setTheme(true)}>
      <ToggleItem theme={theme} />
    </Container>
  )
}
