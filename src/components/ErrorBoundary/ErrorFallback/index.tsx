import {Button} from '@/components/Button'

import {IErrorFallback} from './interface'

import {ErrorText, Container} from './styled'

export const ErrorFallback = ({children}: IErrorFallback) => {
  const handlerClick = () => {
    location.reload()
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
