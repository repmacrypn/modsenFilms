import {useRef, useMemo} from 'react'
import {Search} from 'tabler-icons-react'
import {useTheme} from 'styled-components'

import {Button} from '@/components/Button/index'
import {useSearchControl} from '@/hooks/useSearchControl'
import {HintModal} from '@/components/SearchField/HintModal'
import {useOutsideClick} from '@/hooks/useOutsideClick'

import {ITheme} from '@/types/theme.interface'

import {Container, Wrapper, InputItem} from './styled'

export const SearchField = () => {
  const theme = useTheme() as ITheme
  const hintModalNode = useRef<HTMLDivElement>(null)

  const searchIcon = useMemo(
    () => (
      <Search
        style={{color: theme.colors.mainFont}}
        width={17}
        height={16}
        strokeWidth={2}
      />
    ),
    [theme]
  )

  useOutsideClick(hintModalNode, () => setIsHintModalOpen(false))

  const {
    searchValue,
    isHintModalOpen,
    debouncedSearchValue,
    onKeyUp,
    onSearchChange,
    setIsHintModalOpen,
    handleSearchButtonClick,
    onInputFocus
  } = useSearchControl()

  return (
    <>
      <Container>
        <Wrapper ref={hintModalNode}>
          <InputItem
            onFocus={onInputFocus}
            onKeyUp={onKeyUp}
            value={searchValue}
            onChange={onSearchChange}
            placeholder='Search'
          />
          {isHintModalOpen && <HintModal searchValue={debouncedSearchValue} />}
        </Wrapper>
        <Button callBack={handleSearchButtonClick} type='searchButton'>
          {searchIcon}
        </Button>
      </Container>
    </>
  )
}
