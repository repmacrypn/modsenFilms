import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0;
  max-width: 627px;
  width: 100%;
  height: 38px;

  @media (max-width: 876px) {
    order: 1;
    margin: 15px auto 0;
  }
`

export const Wrapper = styled.div`
  flex-basis: calc(100% - 57px);
  height: 38px;
`

export const InputItem = styled.input`
  display: block;
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  padding: 0 0 0 15px;
  margin: 0;
  border: 1px solid;
  border-radius: 0;
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
