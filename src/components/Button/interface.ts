import {ReactNode} from 'react'

export interface IButton {
  callBack: () => void
  type: ButtonType
  children: ReactNode
}

type ButtonType = 'searchButton' | 'categoriesButton' | 'showMoreButton'
