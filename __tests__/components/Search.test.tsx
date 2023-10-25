import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import {fireEvent, render, waitFor, screen} from '@testing-library/react'

import {SearchField} from '@/components/SearchField'
import * as filmActions from '@/store/slice/filmsSlice'
import {Container, TotalFilmsCount} from '@/components/SearchField/HintModal/styled'
import {FilmCard} from '@/components/SearchField/HintFilmCard/styled'
import {lightTheme} from '@/assets/theme/themes'
import {store} from '@/store/store'

describe('Search field', () => {
  test('should be rendered on the page', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <SearchField />
        </Provider>
      </ThemeProvider>
    )

    const input = screen.getByTestId('searchInput')

    expect(screen.getByTestId('searchField')).toBeInTheDocument()
    expect(screen.getByTestId('searchButton')).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('should call the search function with the query when the search button is clicked', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <SearchField />
        </Provider>
      </ThemeProvider>
    )

    const input = screen.getByTestId('searchInput')
    const button = screen.getByTestId('searchButton')

    const query = 'www'

    fireEvent.change(input, {target: {value: query}})
    fireEvent.click(button)

    expect(store.getState().films.title).toEqual(query)
  })

  test('should handle search button click', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <SearchField />
        </Provider>
      </ThemeProvider>
    )

    const input = screen.getByTestId('searchInput')
    const button = screen.getByTestId('searchButton')

    const query = 'qwerty'

    const setTitleAction = jest.spyOn(filmActions, 'setTitle')
    const setGenreAction = jest.spyOn(filmActions, 'setGenre')
    const setFilmPageAction = jest.spyOn(filmActions, 'setPage')
    const clearFilmsAction = jest.spyOn(filmActions, 'clearFilms')

    fireEvent.change(input, {target: {value: query}})
    fireEvent.click(button)

    expect(setTitleAction).toHaveBeenCalledWith(query)
    expect(clearFilmsAction).toHaveBeenCalled()
    expect(setGenreAction).toHaveBeenCalledWith(null)
    expect(setFilmPageAction).toHaveBeenCalledWith(1)
  })

  it('hint modal should either appear or disappear depending on the search input length', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <SearchField />
        </Provider>
      </ThemeProvider>
    )

    const input = screen.getByTestId('searchInput')

    fireEvent.change(input, {target: {value: 'qq'}})

    const hintModal = screen.queryByTestId('hintModal')

    expect(hintModal).toBeInTheDocument()

    fireEvent.change(input, {target: {value: ''}})
    expect(hintModal).not.toBeInTheDocument()
  })

  it('should render fetched films in the hint modal list', async () => {
    const films = [
      {id: 1, title: 'Ninja turtles'},
      {id: 2, title: 'Titanic'},
      {id: 3, title: 'Whiplash'}
    ]

    const fetchedFilms = jest.fn(() => Promise.resolve(films))
    const response = await fetchedFilms()

    const {findByText} = render(
      <ThemeProvider theme={lightTheme}>
        <Container>
          {response.map((f) => (
            <FilmCard key={f.id}>{f.title}</FilmCard>
          ))}
          <TotalFilmsCount>Total films count: {response.length}</TotalFilmsCount>
        </Container>
      </ThemeProvider>
    )

    const film = await findByText(/Whiplash/i)

    expect(film).toBeInTheDocument()
    expect(response).toHaveLength(3)
    await waitFor(() => expect(fetchedFilms).toHaveBeenCalledTimes(1))
  })
})
