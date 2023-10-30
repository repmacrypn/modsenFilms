import React, { useCallback, useMemo } from 'react'
import { X } from 'tabler-icons-react'

import { Button } from '@/components/Button'

import { IModal } from './interface'
import { ModalContent, ModalWrapper } from './styled'

export const Modal = ({ isActive, onModalClick, children }: IModal) => {
  const closeIcon = useMemo(() => <X height={25} width={25} strokeWidth={2.25} />, [])

  const handleModalClose = useCallback(() => {
    onModalClick(false)
  }, [onModalClick])

  return (
    <ModalWrapper data-testid='modal' isActive={isActive} onClick={handleModalClose}>
      <ModalContent
        isActive={isActive}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      >
        {children}
      </ModalContent>
      <Button isActive={isActive} type='closeButton' callBack={handleModalClose}>
        {closeIcon}
      </Button>
    </ModalWrapper>
  )
}
