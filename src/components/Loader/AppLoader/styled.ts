import styled from 'styled-components'

export const Loader = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border: 4px solid #ff8a00;
  border-bottom: 4px solid transparent;
  border-radius: 50%;
  animation: spinAnimation 1s linear infinite;

  @keyframes spinAnimation {
    to {
      transform: rotate(360deg);
    }
  }
`
