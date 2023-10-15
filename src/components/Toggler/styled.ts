import styled from 'styled-components'

import {ThemeEnum} from '@/types/themes.enum'

export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 28px;
  z-index: 5;
  background-color: ${(props) => props.theme.colors.togglerBackColor};
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.togglerBorderColor};
  border-radius: 28px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`

export const ToggleItem = styled.div<{themeValue: ThemeEnum}>`
  position: absolute;
  left: -2px;
  top: -1px;
  width: 27px;
  height: 27px;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.togglerBorderColor};
  border-radius: 50%;
  transform: translateX(
    ${({themeValue}) => (themeValue === 'lightTheme' ? '0px' : '23px')}
  );
  transition: transform 0.2s ease;
`
