import styled from 'styled-components'

export const Container = styled.div<{isOpen: boolean}>`
  display: none;

  @media (max-width: 620px) {
    display: block;
    position: relative;
    top: 2px;
    cursor: pointer;
    z-index: 7;
    background: transparent;
  }

  div {
    position: relative;
    width: 26px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.mainFont};
    margin: 5px 0;
    z-index: 7;
    transition: all 0.3s linear;

    :first-child {
      transform: ${({isOpen}) =>
        isOpen ? 'translate(0, 4px) rotate(-45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({isOpen}) => (isOpen ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({isOpen}) =>
        isOpen ? 'translate(0, -12px) rotate(45deg)' : 'rotate(0)'};
    }
  }
`
