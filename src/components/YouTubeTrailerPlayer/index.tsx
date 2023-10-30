import { TraylerPlayerProps } from './interface'
import { Trailer } from './styled'

export const YouTubeTrailerPlayer = ({ trailerKey }: TraylerPlayerProps) => {
  return <Trailer src={trailerKey} />
}
