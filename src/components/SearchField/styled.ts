import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 627px;
  width: 100%;
  height: 38px;

  @media (max-width: 882px) {
    order: 1;
    margin: 15px auto 0;
  }
`

export const InputItem = styled.input`
  flex-basis: calc(100% - 57px);
  padding: 0 0 0 15px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.borderColor};
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.inputFontColor};
  background-color: ${(props) => props.theme.colors.inputBackColor};
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.inputBorderActiveColor};
  }

  &:focus {
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.inputBorderActiveColor};
    outline: none;
  }
`
