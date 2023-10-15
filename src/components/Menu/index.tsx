import {useRef, useState} from 'react'

import {useOutsideClick} from '@/hooks/useOutsideClick'
import {BurgerMenu} from '@/components/BurgerMenu/index'
import {Toggler} from '@/components/Toggler/index'

import {MenuContent, Container} from './styled'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuNode = useRef<HTMLDivElement>(null)

  useOutsideClick(menuNode, () => setIsOpen(false))

  return (
    <Container ref={menuNode}>
      <BurgerMenu isOpen={isOpen} handleMenuClick={() => setIsOpen(!isOpen)} />
      <MenuContent isOpen={isOpen}>
        Here you can change the theme...
        <Toggler />
      </MenuContent>
    </Container>
  )
}
