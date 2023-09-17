import styled, {css} from 'styled-components'

export const CategoriesButton = styled.button<{isActive: boolean}>`
  padding: 7px 26px;
  border-radius: 15px;
  border: 1px solid;
  border-color: ${({isActive}) => (isActive ? '#000000' : 'rgba(0, 0, 0, 0.1)')};
  background-color: ${({isActive}) => (isActive ? '#000000' : 'rgba(0, 0, 0, 0.06)')};
  color: ${({isActive}) => (isActive ? '#F8F8F8' : '#000000')};
  cursor: ${({isActive}) => (isActive ? 'default' : 'pointer')};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  will-change: transform;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.9);
  }

  ${({isActive}) =>
    !isActive &&
    css`
      &:hover {
        background: #c4c4c4;
      }
    `}
`
