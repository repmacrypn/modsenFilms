import {socialMedia} from '@/utils/constants/socialMedia'

import {MediaImg, MediaLink, SocialMediaWrapper} from './styled'

export const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      {socialMedia.map((m) => (
        <MediaLink key={m.media} href={m.url}>
          <MediaImg src={m.img} alt={m.media} />
        </MediaLink>
      ))}
    </SocialMediaWrapper>
  )
}
