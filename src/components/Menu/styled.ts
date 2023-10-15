import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  @media (max-width: 620px) {
    display: block;
  }
`

export const MenuContent = styled.div<{isOpen: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100vh;
  width: 100%;
  max-width: 420px;
  z-index: 6;
  box-shadow: 4px 0 20px 0 ${(props) => props.theme.colors.boxShadow};
  color: ${(props) => props.theme.colors.mainFont};
  background-color: ${(props) => props.theme.colors.mainBackColor};
  transform: ${({isOpen}) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 420px) {
    box-shadow: none;
  }
`
