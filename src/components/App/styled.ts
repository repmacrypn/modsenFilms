import styled, {createGlobalStyle} from 'styled-components'

import {ITheme} from '@/types/theme.interface'

export const GlobalStyles = createGlobalStyle<{theme: ITheme}>`
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 100%;
    line-height: 1;
    border: 0;
    background-color: ${(props) => props.theme.colors.mainBackColor};
    color: ${(props) => props.theme.colors.mainFont};
  }
`

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  transition: all 0.3s ease;
`
