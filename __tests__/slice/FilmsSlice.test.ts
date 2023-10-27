import {
  setGenre,
  setTitle,
  addFilms,
  setPage,
  clearFilters,
  clearFilms
} from '@/store/slice/filmsSlice'
import {films} from '@/utils/constants/filmsArrayForTests'

describe('FilmsSlice', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('setGenre action should work properly', () => {
    const payload = 'Documentary'
    const action = setGenre(payload)

    const expectedAction = {
      payload,
      type: 'films/setGenre'
    }

    expect(action).toEqual(expectedAction)
    expect(action.type).toEqual(expectedAction.type)
    expect(action.payload).toEqual(expectedAction.payload)
  })

  test('setTitle action should work properly', () => {
    const payload = 'qwerty'
    const action = setTitle(payload)

    const expectedAction = {
      payload,
      type: 'films/setTitle'
    }

    expect(action).toEqual(expectedAction)
    expect(action.type).toEqual(expectedAction.type)
    expect(action.payload).toEqual(expectedAction.payload)
  })

  test('addFilms action should work properly', () => {
    const payload = films
    const action = addFilms(payload)

    const expectedAction = {
      payload,
      type: 'films/addFilms'
    }

    expect(action).toEqual(expectedAction)
    expect(action.type).toEqual(expectedAction.type)
    expect(action.payload).toEqual(expectedAction.payload)
  })

  test('setPage action should work properly', () => {
    const payload = 2
    const action = setPage(payload)

    const expectedAction = {
      payload,
      type: 'films/setPage'
    }

    expect(action).toEqual(expectedAction)
    expect(action.type).toEqual(expectedAction.type)
    expect(action.payload).toEqual(expectedAction.payload)
  })

  test('clearFilms action should work properly', () => {
    const payload = undefined
    const action = clearFilms()

    const expectedAction = {
      payload,
      type: 'films/clearFilms'
    }

    expect(action).toEqual(expectedAction)
    expect(action.type).toEqual(expectedAction.type)
    expect(action.payload).toEqual(expectedAction.payload)
  })

  test('clearFilters action should work properly', () => {
    const payload = undefined
    const action = clearFilters()

    const expectedAction = {
      payload,
      type: 'films/clearFilters'
    }

    expect(action).toEqual(expectedAction)
    expect(action.type).toEqual(expectedAction.type)
    expect(action.payload).toEqual(expectedAction.payload)
  })
})
