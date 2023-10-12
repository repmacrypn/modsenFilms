import {AvatarLoader, ContentLoader, FilmCardLoader, PreviewLoader} from './styled'

export const SkeletonFilmsLoader = () => {
  return (
    <FilmCardLoader>
      <PreviewLoader>
        <AvatarLoader />
        <ContentLoader />
        <ContentLoader />
      </PreviewLoader>
    </FilmCardLoader>
  )
}
