import {Search} from 'tabler-icons-react'
import {useTheme} from 'styled-components'

import {Button} from '@/components/Button/index'

import {ITheme} from '@/types/theme.interface'

import {Container, InputItem} from './styled'

export const SearchField = () => {
  const theme = useTheme() as ITheme

  return (
    <Container>
      <InputItem placeholder='Search' />
      <Button callBack={() => console.log('qq')} type='searchButton'>
        <Search
          style={{color: theme.colors.mainFont}}
          width={17}
          height={16}
          strokeWidth={2}
        />
      </Button>
    </Container>
  )
}
