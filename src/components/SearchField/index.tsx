import {Search} from 'tabler-icons-react'

import {ButtonItem, Container, InputItem} from './styled'

export const SearchField = () => {
  return (
    <Container>
      <InputItem placeholder='Search' />
      <ButtonItem>
        <Search width={17} height={16} strokeWidth={2} />
      </ButtonItem>
    </Container>
  )
}
