import {useState} from 'react'

import {IButton} from './interface'

import {CategoriesButton, SearchButton, ShowMoreButton} from './styled'

export const Button = ({callBack, type, children}: IButton) => {
  const [isActive, setIsActive] = useState(false)
  let button

  switch (type) {
    case 'searchButton': {
      button = <SearchButton onClick={callBack}>{children}</SearchButton>
      break
    }
    case 'categoriesButton': {
      button = (
        <CategoriesButton isActive={isActive} onClick={() => setIsActive(!isActive)}>
          {children}
        </CategoriesButton>
      )
      break
    }
    case 'showMoreButton': {
      button = <ShowMoreButton onClick={callBack}>{children}</ShowMoreButton>
      break
    }
    default:
      button = <button>{children}</button>
  }

  return button
}
