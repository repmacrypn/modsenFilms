import {Button} from '@/components/Button'
import {genres} from '@/utils/constants/genres'

import {GenresWrapper} from './styled'

export const Genres = () => {
  return (
    <GenresWrapper>
      {genres.map((g) => (
        <Button key={g.id} text={g.value} callBack={() => alert('qq')} />
      ))}
    </GenresWrapper>
  )
}
