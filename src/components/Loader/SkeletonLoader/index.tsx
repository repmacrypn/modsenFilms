import {memo} from 'react'

import {AvatarLoader, ContentLoader, FilmCardLoader, PreviewLoader} from './styled'

export const SkeletonFilmsLoader = memo(() => {
  return (
    <FilmCardLoader>
      <PreviewLoader>
        <AvatarLoader />
        <ContentLoader />
        <ContentLoader />
      </PreviewLoader>
    </FilmCardLoader>
  )
})
