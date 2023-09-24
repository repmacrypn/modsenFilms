import {Button} from '@/components/Button'

import {Text, Container} from './styled'

export const ErrorFallback = () => {
  const handlerClick = () => {
    location.reload()
  }

  return (
    <Container>
      <Text>Something went wrong, please reload the page...</Text>
      <Button type='showMoreButton' callBack={handlerClick}>
        Reload page
      </Button>
    </Container>
  )
}
