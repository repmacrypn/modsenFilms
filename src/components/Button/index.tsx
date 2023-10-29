import {memo} from 'react'

import {IButton} from './interface'

import {CategoriesButton, SearchButton, ShowMoreButton, CloseButton} from './styled'

export const Button = memo(({callBack, type, children, isActive}: IButton) => {
  let button

  switch (type) {
    case 'searchButton': {
      button = (
        <SearchButton data-testid='searchButton' onClick={callBack}>
          {children}
        </SearchButton>
      )
      break
    }

    case 'categoriesButton': {
      button = (
        <CategoriesButton
          data-testid='categoriesButton'
          isActive={!!isActive}
          onClick={callBack}
        >
          {children}
        </CategoriesButton>
      )
      break
    }

    case 'showMoreButton': {
      button = (
        <ShowMoreButton
          data-testid='showMoreButton'
          disabled={isActive}
          onClick={callBack}
        >
          {children}
        </ShowMoreButton>
      )
      break
    }

    case 'closeButton': {
      button = (
        <CloseButton data-testid='closeButton' isActive={!!isActive} onClick={callBack}>
          {children}
        </CloseButton>
      )
      break
    }

    default:
      button = <button>{children}</button>
  }

  return button
})
