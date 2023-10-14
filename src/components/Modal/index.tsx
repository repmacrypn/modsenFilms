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
    </ModalWrapper>
  )
}
