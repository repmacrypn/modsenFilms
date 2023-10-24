import React from 'react'
import {ThemeProvider} from 'styled-components'
import {screen, fireEvent, render} from '@testing-library/react'

import {darkTheme, lightTheme} from '@/assets/theme/themes'
import {Toggler} from '@/components/Toggler'
import {ThemeContext} from '@/context/ThemeContext'
import {ThemeEnum} from '@/types/themes.enum'

describe('Toggler', () => {
  test('should be rendered on the page', () => {
    const setTheme = jest.fn()

    const wrapper = ({children}: {children: React.ReactNode}) => (
      <ThemeProvider theme={ThemeEnum.light ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{theme: ThemeEnum.light, setTheme}}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    )

    render(<Toggler />, {wrapper})

    const togglerWrapper = screen.getByTestId('togglerWrapper')
    const toggler = screen.getByTestId('toggler')

    expect(togglerWrapper).toBeInTheDocument()
    expect(toggler).toBeInTheDocument()
  })

  it("should be switched to the dark theme when it's toggled", () => {
    const setTheme = jest.fn()

    const wrapper = ({children}: {children: React.ReactNode}) => (
      <ThemeProvider theme={ThemeEnum.light ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{theme: ThemeEnum.light, setTheme}}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    )

    const {getByTestId} = render(<Toggler />, {wrapper})

    const toggler = getByTestId('togglerWrapper')

    fireEvent.click(toggler)

    expect(setTheme).toHaveBeenCalledWith(ThemeEnum.dark)
  })

  it("should be switched to the light theme when it's toggled", () => {
    const setTheme = jest.fn()

    const wrapper = ({children}: {children: React.ReactNode}) => (
      <ThemeProvider theme={ThemeEnum.light ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{theme: ThemeEnum.dark, setTheme}}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    )

    const {getByTestId} = render(<Toggler />, {wrapper})

    const toggler = getByTestId('togglerWrapper')

    fireEvent.click(toggler)

    expect(setTheme).toHaveBeenCalledWith(ThemeEnum.light)
  })
})
