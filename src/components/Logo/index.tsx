import youtube from '@/assets/images/youtube.png'

import {LogoImage, LogoTitle, LogoWrapper} from './styled'

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage alt='logo' src={youtube} />
      <LogoTitle>ModsenFilms</LogoTitle>
    </LogoWrapper>
  )
}
