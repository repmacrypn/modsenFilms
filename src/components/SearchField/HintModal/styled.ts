import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 54px;
  left: 10%;
  max-width: 80%;
  width: 100%;
  max-height: 450px;
  min-height: 100px;
  z-index: 8;
  overflow: auto;
  background: ${(props) => props.theme.colors.mainBackColor};
  color: ${(props) => props.theme.colors.mainFont};
  box-shadow: 0px 7px 7px 0px black;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(196, 196, 196, 0.8);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff8a00;
    border-radius: 8px;
  }

  @media (max-width: 876px) {
    top: 110px;
  }
`

export const TotalFilmsCount = styled.p`
  font-style: italic;
  padding: 0 10px;
`
