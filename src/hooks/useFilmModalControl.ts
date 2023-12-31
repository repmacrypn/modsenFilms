import { useCallback, useState } from 'react'

export const useFilmModalControl = () => {
  const [selectedFilmId, setSelectedFilmId] = useState<number | null>(null)

  const handleFilmClick = useCallback(
    (filmId: number) => {
      setSelectedFilmId(filmId)
    },
    [setSelectedFilmId],
  )

  const handleModalCloseClick = useCallback(() => {
    setSelectedFilmId(null)
  }, [])

  return {
    selectedFilmId,
    handleFilmClick,
    handleModalCloseClick,
  }
}
