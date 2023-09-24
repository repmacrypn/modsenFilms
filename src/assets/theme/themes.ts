import {DefaultTheme} from 'styled-components'

import {ThemeEnum} from '@/types/themes.enum'
import {ITheme} from '@/types/theme.interface'

const baseTheme: ITheme = {
  colors: {
    mainBackColor: 'white',
    mainFont: 'black',
    fontLink: 'rgba(0, 0, 0, 0.83)',
    categButBackColor: 'rgba(0, 0, 0, 0.06)',
    categButBackColorActive: '#000000',
    categButBackColorHover: ' #c4c4c4',
    categButFont: '#000000',
    categButFontActive: '#F8F8F8',
    searchButBackColor: 'white',
    searchButBackColorHover: 'rgba(0, 0, 0, 0.06)',
    togglerBorderColor: '#ff8a00',
    togglerBackColor: 'white',
    inputBackColor: 'white',
    inputFontColor: 'black',
    inputBorderActiveColor: '#121212',
    companyRightsColor: 'rgba(0, 0, 0, 0.4)',
    borderColor: '#c4c4c4',
    borderColor2: '#00000030',
    borderColorHover: '#121212',
    boxShadow: '#383838'
  }
}

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light
}

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    mainBackColor: '#141414',
    mainFont: 'white',
    fontLink: '#ffffff',
    categButBackColor: '#272727',
    categButBackColorActive: 'white',
    categButBackColorHover: '#383838',
    categButFont: 'white',
    categButFontActive: 'black',
    searchButBackColor: '#141414',
    searchButBackColorHover: '#383838',
    togglerBorderColor: 'white',
    togglerBackColor: '#141414',
    inputBackColor: '#141414',
    inputFontColor: 'white',
    inputBorderActiveColor: 'white',
    companyRightsColor: '#7d7d7d',
    borderColor: '#7d7d7d',
    borderColor2: '#6d6e76',
    borderColorHover: 'white',
    boxShadow: '#c4c4c4'
  }
}
