import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  max-width: 627px;
  width: 100%;
  height: 38px;

  @media (min-width: 243px) and (max-width: 860px) {
    order: 1;
    margin: 15px auto 0;
  }
`

export const InputItem = styled.input`
  flex-basis: calc(100% - 57px);
  padding: 0 0 0 15px;
  border: 1px solid #c4c4c4;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid #121212;
  }

  &:focus {
    border: 1px solid #121212;
    outline: none;
  }
`
