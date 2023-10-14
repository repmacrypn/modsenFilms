import {IButton} from './interface'

import {CategoriesButton, SearchButton, ShowMoreButton, CloseButton} from './styled'

export const Button = ({callBack, type, children, isActive}: IButton) => {
  let button

  switch (type) {
    case 'searchButton': {
      button = <SearchButton onClick={callBack}>{children}</SearchButton>
      break
    }
    case 'categoriesButton': {
      button = (
        <CategoriesButton isActive={!!isActive} onClick={callBack}>
          {children}
        </CategoriesButton>
      )
      break
    }
    case 'showMoreButton': {
      button = (
        <ShowMoreButton disabled={isActive} onClick={callBack}>
          {children}
        </ShowMoreButton>
      )
      break
    }

    case 'closeButton': {
      button = (
        <CloseButton isActive={!!isActive} onClick={callBack}>
          {children}
        </CloseButton>
      )
      break
    }

    default:
      button = <button>{children}</button>
  }

  return button
}
