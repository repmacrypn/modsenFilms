import { Button } from '@/components/Button'

import { IErrorFallback } from './interface'
import { Container, ErrorText } from './styled'

export const ErrorFallback = ({ children }: IErrorFallback) => {
  const handlerClick = () => {
    window.location.reload()
  }

  return (
    <Container>
      <ErrorText>{children}</ErrorText>
      <Button type='showMoreButton' callBack={handlerClick}>
        Reload page
      </Button>
    </Container>
  )
}
