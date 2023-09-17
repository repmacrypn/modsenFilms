import {useState} from 'react'

import {IButton} from './interface'

import {CategoriesButton} from './styled'

export const Button = ({callBack, text}: IButton) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <CategoriesButton
      isActive={isActive}
      type='button'
      onClick={() => setIsActive(!isActive)}
    >
      {text}
    </CategoriesButton>
  )
}
