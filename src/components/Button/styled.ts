import styled, {css} from 'styled-components'

export const CategoriesButton = styled.button<{isActive: boolean}>`
  padding: 7px 26px;
  border-radius: 15px;
  border: 1px solid;
  border-color: ${({isActive}) => (isActive ? '#000000' : 'rgba(0, 0, 0, 0.1)')};
  background-color: ${({isActive, theme}) =>
    isActive ? theme.colors.categButBackColorActive : theme.colors.categButBackColor};
  color: ${({isActive, theme}) =>
    isActive ? theme.colors.categButFontActive : theme.colors.categButFont};
  cursor: ${({isActive}) => (isActive ? 'default' : 'pointer')};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  will-change: transform;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.9);
    transition: all 0.3s ease;
  }

  ${({isActive}) =>
    !isActive &&
    css`
      &:hover {
        background: ${(props) => props.theme.colors.categButBackColorHover};
      }
    `}
`

export const SearchButton = styled.button`
  width: 57px;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.borderColor};
  background-color: ${(props) => props.theme.colors.searchButBackColor};
  transition: all 0.3s ease;

  &:active {
    transform: translateY(0.0625rem);
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.searchButBackColorHover};
    border-color: ${(props) => props.theme.colors.borderColorHover};
  }
`

export const ShowMoreButton = styled.button`
  display: block;
  width: 192.91px;
  height: 52.34px;
  margin: 27px auto 0;
  border-radius: 6px;
  border: none;
  font-weight: 700;
  font-size: 22px;
  color: white;
  background-color: #ff8a00;
  text-align: center;
  will-change: transform;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.9);
    border-radius: 25px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.4;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    border-radius: 12px;
    width: 206.32px;
    height: 33.13px;
  }
`

export const CloseButton = styled.button<{isActive: boolean}>`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  color: black;
  background-color: #f0f0f0;
  /* font-size: 22px;
  font-weight: 500; */
  line-height: 26px;
  transition: all 0.3s ease;

  ${({isActive}) =>
    isActive &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    background-color: rgb(213 213 213);
    cursor: pointer;
  }
`
