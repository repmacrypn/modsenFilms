import { Button } from '@/components/Button'
import { useAppDispatch, useAppSelector } from '@/hooks/useAppHooks'
import { selectGenre } from '@/store/selectors/filmsSelectors'
import { clearFilters, setGenre } from '@/store/slice/filmsSlice'
import { GenreValue } from '@/types/genres.enum'
import { genres } from '@/utils/constants/genres'

import { GenresWrapper } from './styled'

export const Genres = () => {
  const dispatch = useAppDispatch()

  const genre = useAppSelector(selectGenre)

  const handleButtonClick = (currentGenre: GenreValue) => {
    if (genre !== currentGenre) {
      dispatch(clearFilters())
      dispatch(setGenre(currentGenre))
    }
  }

  return (
    <GenresWrapper data-testid='genres'>
      {genres.map((g) => (
        <Button
          type='categoriesButton'
          key={g.id}
          isActive={g.value === genre}
          callBack={() => handleButtonClick(g.value)}
        >
          {g.value}
        </Button>
      ))}
    </GenresWrapper>
  )
}
