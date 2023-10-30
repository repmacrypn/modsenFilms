import youtube from '@/assets/images/youtube.png'
import { useAppDispatch, useAppSelector } from '@/hooks/useAppHooks'
import { selectGenre } from '@/store/selectors/filmsSelectors'
import { clearFilters } from '@/store/slice/filmsSlice'

import { LogoImage, LogoTitle, LogoWrapper } from './styled'

export const Logo = () => {
  const dispatch = useAppDispatch()

  const genre = useAppSelector(selectGenre)

  const handleLogoClick = () => {
    if (genre !== 'All') {
      dispatch(clearFilters())
    }
  }

  return (
    <LogoWrapper onClick={handleLogoClick}>
      <LogoImage alt='logo' src={youtube} />
      <LogoTitle>ModsenFilms</LogoTitle>
    </LogoWrapper>
  )
}
