import {Button} from '@/components/Button'
import {genres} from '@/utils/constants/genres'
import {useAppDispatch, useAppSelector} from '@/hooks/useAppHooks'
import {clearFilters, setGenre} from '@/store/slice/filmsSlice'
import {selectGenre} from '@/store/selectors/filmsSelectors'

import {GenreValue} from '@/types/genres.interface'

import {GenresWrapper} from './styled'

export const Genres = () => {
  const dispatch = useAppDispatch()

  const genre = useAppSelector(selectGenre)

  const handleButtonClick = (currentGenre: GenreValue) => {
    if (genre !== currentGenre) {
      dispatch(clearFilters(false))
      dispatch(setGenre(currentGenre))
    }
  }

  return (
    <GenresWrapper>
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
