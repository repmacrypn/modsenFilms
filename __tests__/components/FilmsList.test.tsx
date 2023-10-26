import {Provider} from 'react-redux'
import {render, screen, waitFor, fireEvent} from '@testing-library/react'
import {ThemeProvider} from 'styled-components'

import {store} from '@/store/store'
import {lightTheme} from '@/assets/theme/themes'
import {Container} from '@/components/Main/FilmsList/styled'
import {films} from '@/utils/constants/filmsArrayForTests'
import {FilmsList} from '@/components/Main/FilmsList'
import {FilmCard} from '@/components/Main/FilmCard'

describe('Films list', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  const handleFilmClickMock = jest.fn()

  it('should render films list and the Show More Button', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <FilmsList />
        </Provider>
      </ThemeProvider>
    )

    expect(screen.getByTestId('filmsList')).toBeInTheDocument()
    expect(screen.getByTestId('showMoreButton')).toBeInTheDocument()
  })

  it('should render exact fetched films', async () => {
    const fetchedFilms = jest.fn(() => Promise.resolve(films))
    const response = await fetchedFilms()

    const {findByText, findAllByTestId} = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <Container>
            {response.map((f) => (
              <FilmCard handleFilmClick={handleFilmClickMock} key={f.id} film={f} />
            ))}
          </Container>
        </Provider>
      </ThemeProvider>
    )

    const filmCards = await findAllByTestId('filmCard')
    const film = await findByText(/Saw X/i)

    filmCards.forEach((c) => {
      expect(c).toBeInTheDocument()
    })

    expect(film).toBeInTheDocument()
    expect(response).toHaveLength(3)
    await waitFor(() => expect(fetchedFilms).toHaveBeenCalledTimes(1))
  })

  test('should process the film card click', () => {
    const {getAllByTestId} = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <Container>
            {films.map((f) => (
              <FilmCard handleFilmClick={handleFilmClickMock} key={f.id} film={f} />
            ))}
          </Container>
        </Provider>
      </ThemeProvider>
    )

    const filmCards = getAllByTestId('filmCard')

    fireEvent.click(filmCards[0])

    expect(handleFilmClickMock).toHaveBeenCalledWith(films[0].id)
  })
})
