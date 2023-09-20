import {Search} from 'tabler-icons-react'

import {Button} from '@/components/Button/index'

import {Container, InputItem} from './styled'

export const SearchField = () => {
  return (
    <Container>
      <InputItem placeholder='Search' />
      <Button callBack={() => console.log('qq')} type='searchButton'>
        <Search width={17} height={16} strokeWidth={2} />
      </Button>
    </Container>
  )
}
