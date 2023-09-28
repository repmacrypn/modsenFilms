import {ReactNode} from 'react'

import {Button} from '@/components/Button'

import {ErrorText, Container} from './styled'

export const ErrorFallback = ({children}: {children: ReactNode}) => {
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
