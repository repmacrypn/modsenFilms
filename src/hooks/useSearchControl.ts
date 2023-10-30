import React, { KeyboardEvent, useCallback, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/useAppHooks'
import { useDebounce } from '@/hooks/useDebounce'
import { selectTitle } from '@/store/selectors/filmsSelectors'
import { clearFilms, setGenre, setPage, setTitle } from '@/store/slice/filmsSlice'

export const useSearchControl = () => {
  const dispatch = useAppDispatch()

  const initialTilteValue = useAppSelector(selectTitle)

  const [searchValue, setSeatchValue] = useState<string>(initialTilteValue)
  const [isHintModalOpen, setIsHintModalOpen] = useState(false)

  const debouncedSearchValue = useDebounce(searchValue, 500)

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeatchValue(e.target.value)

    if (e.target.value.length > 0) setIsHintModalOpen(true)
    else setIsHintModalOpen(false)
  }

  const handleSearchButtonClick = useCallback(() => {
    if (searchValue.length > 0) {
      setIsHintModalOpen(false)
      dispatch(clearFilms())
      dispatch(setPage(1))
      dispatch(setTitle(searchValue))
      dispatch(setGenre(null))
    }
  }, [searchValue, dispatch])

  const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleSearchButtonClick()
  }

  const onInputFocus = () => {
    if (searchValue.length > 0) setIsHintModalOpen(true)
  }

  useEffect(() => {
    setSeatchValue(initialTilteValue)
  }, [initialTilteValue])

  return {
    searchValue,
    isHintModalOpen,
    debouncedSearchValue,
    onKeyUp,
    onSearchChange,
    setIsHintModalOpen,
    handleSearchButtonClick,
    onInputFocus,
  }
}
