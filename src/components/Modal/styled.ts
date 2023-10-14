import styled from 'styled-components'

export const ModalWrapper = styled.div<{isActive: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  pointer-events: ${({isActive}) => (isActive ? 'all' : 'none')};
  opacity: ${({isActive}) => (isActive ? 1 : 0)};
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: default;
`

export const ModalContent = styled.div<{isActive: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 39.25vw;
  transform: ${({isActive}) => (isActive ? 'scale(1)' : 'scale(0.5)')};
  transition: all 0.5s;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.mainBackColor};
  color: ${(props) => props.theme.colors.mainFont};

  @media (max-width: 992px) {
    width: 80vw;
    height: 40.25vw;
  }

  @media (max-width: 420px) {
    width: 90vw;
    height: 50.25vw;
  }
`
