import {ReactNode} from 'react'

export interface IButton {
  callBack: () => void
  type: ButtonType
  children: ReactNode
  isActive?: boolean
}

type ButtonType = 'searchButton' | 'categoriesButton' | 'showMoreButton'
