import {Button} from '@/components/Button'
import {genres} from '@/utils/constants/genres'

import {GenresWrapper} from './styled'

export const Genres = () => {
  return (
    <GenresWrapper>
      {genres.map((g) => (
        <Button type='categoriesButton' key={g.id} callBack={() => alert('qq')}>
          {g.value}
        </Button>
      ))}
    </GenresWrapper>
  )
}
