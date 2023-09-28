import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ErrorText = styled.p`
  font-size: 24px;
  text-align: center;
  line-height: 150%;
`
