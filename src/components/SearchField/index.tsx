import {Search} from 'tabler-icons-react'
import {useTheme} from 'styled-components'

import {Button} from '@/components/Button/index'
import {useSearchControl} from '@/hooks/useSearchControl'
import {HintModal} from '@/components/SearchField/HintModal'

import {ITheme} from '@/types/theme.interface'

import {Container, InputItem} from './styled'

export const SearchField = () => {
  const theme = useTheme() as ITheme

  const {
    searchValue,
    isHintModalOpen,
    debouncedSearchValue,
    onKeyUp,
    onSearchChange,
    setIsHintModalOpen,
    handleSearchButtonClick
  } = useSearchControl()

  return (
    <>
      <Container>
        <InputItem
          onKeyUp={onKeyUp}
          value={searchValue}
          onChange={onSearchChange}
          placeholder='Search'
        />
        <Button callBack={handleSearchButtonClick} type='searchButton'>
          <Search
            style={{color: theme.colors.mainFont}}
            width={17}
            height={16}
            strokeWidth={2}
          />
        </Button>
      </Container>
      {isHintModalOpen && (
        <HintModal
          setIsHintModalOpen={setIsHintModalOpen}
          searchValue={debouncedSearchValue}
        />
      )}
    </>
  )
}
