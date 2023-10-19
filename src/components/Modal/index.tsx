import {X} from 'tabler-icons-react'

import {Button} from '@/components/Button/'

import {IModal} from './interface'

import {ModalContent, ModalWrapper} from './styled'

export const Modal = ({isActive, onModalClick, children}: IModal) => {
  return (
    <ModalWrapper isActive={isActive} onClick={() => onModalClick(false)}>
      <ModalContent
        isActive={isActive}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      >
        {children}
      </ModalContent>
      <Button isActive={isActive} type='closeButton' callBack={() => onModalClick(false)}>
        <X size={26} height={26} width={26} strokeWidth={2.25} />
      </Button>
    </ModalWrapper>
  )
}
