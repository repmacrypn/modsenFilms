import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import {fireEvent, render} from '@testing-library/react'

import {store} from '@/store/store'
import {Genres} from '@/components/Main/Genres'
import {lightTheme} from '@/assets/theme/themes'
import {genres} from '@/utils/constants/genres'
import {Button} from '@/components/Button'

describe('Genres', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  const onButtonClickMock = jest.fn()

  test('should render all categories buttons', () => {
    const {getAllByTestId, getByTestId} = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <Genres />
        </Provider>
      </ThemeProvider>
    )

    const categoriesButons = getAllByTestId('categoriesButton')

    expect(getByTestId('genres')).toBeInTheDocument()
    expect(categoriesButons.length).toBe(Object.keys(genres).length)
    categoriesButons.forEach((b) => expect(b).toBeInTheDocument())
  })

  test('category should be picked when the button is clicked', () => {
    const {getByText} = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          {genres.map((g) => (
            <Button
              key={g.id}
              isActive={false}
              type='categoriesButton'
              callBack={() => onButtonClickMock(g.value)}
            >
              {g.value}
            </Button>
          ))}
        </Provider>
      </ThemeProvider>
    )

    const button = getByText('Romance')

    fireEvent.click(button)
    expect(onButtonClickMock).toBeCalled()
  })
})
