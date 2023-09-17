import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  max-width: 627px;
  width: 100%;
  height: 38px;
`

export const InputItem = styled.input`
  flex-basis: calc(100% - 57px);
  height: 36px;
  padding: 0 0 0 15px;
  transition: all 0.2s ease 0s;
  border: 1px solid #c4c4c4;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`

export const ButtonItem = styled.button`
  flex-basis: 59px;
  height: 100%;
  border: 1px solid #c4c4c4;
  background-color: white;
`
