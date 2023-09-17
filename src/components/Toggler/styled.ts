import styled from 'styled-components'

export const Container = styled.div`
  width: 50px;
  height: 28px;
  background-color: white;
  border: 2px solid #ff8a00;
  border-radius: 28px;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`

export const ToggleItem = styled.div<{theme: boolean}>`
  width: 27px;
  height: 27px;
  border: 2px solid #ff8a00;
  border-radius: 50%;
  position: absolute;
  left: -2px;
  top: -1px;
  transform: translateX(${({theme}) => (theme ? '0px' : '24px')});
  transition: transform 0.2s ease;
`
