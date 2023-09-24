import styled from 'styled-components'

import {ThemeEnum} from '@/types/themes.enum'

export const Container = styled.div`
  width: 50px;
  height: 28px;
  background-color: ${(props) => props.theme.colors.togglerBackColor};
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.togglerBorderColor};
  border-radius: 28px;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`

export const ToggleItem = styled.div<{themeValue: ThemeEnum}>`
  width: 27px;
  height: 27px;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.togglerBorderColor};
  border-radius: 50%;
  position: absolute;
  left: -2px;
  top: -1px;
  transform: translateX(
    ${({themeValue}) => (themeValue === 'lightTheme' ? '0px' : '23px')}
  );
  transition: transform 0.2s ease;
`
