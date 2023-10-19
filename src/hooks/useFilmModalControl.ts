import {useState} from 'react'

export const useFilmModalControl = () => {
  const [selectedFilmId, setSelectedFilmId] = useState<number | null>(null)

  const handleFilmClick = (filmId: number) => {
    setSelectedFilmId(filmId)
  }

  const handleModalCloseClick = () => {
    setSelectedFilmId(null)
  }

  return {
    selectedFilmId,
    handleFilmClick,
    handleModalCloseClick
  }
}
