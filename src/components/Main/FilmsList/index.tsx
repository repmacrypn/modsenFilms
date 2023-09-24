import filmImage from '@/assets/images/FilmImage.png'
import avatarPhoto from '@/assets/images/AvatarPhoto.png'
import {Button} from '@/components/Button'

import {
  AvatarPhoto,
  Container,
  FilmAuthorYear,
  FilmCard,
  FilmImage,
  FilmInfoWrapper,
  FilmName
} from './styled'

export const FilmsList = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <>
      <Container>
        {arr.map((i) => (
          <FilmCard key={i}>
            <FilmImage alt='film preview' src={filmImage} />
            <FilmInfoWrapper>
              <AvatarPhoto alt='avatar' src={avatarPhoto} />
              <div>
                <FilmName>The Shawshank Redemption</FilmName>
                <FilmAuthorYear>Stephen King • 1994</FilmAuthorYear>
              </div>
            </FilmInfoWrapper>
          </FilmCard>
        ))}
      </Container>
      <Button callBack={() => console.log('show motre button!!!')} type='showMoreButton'>
        Show More
      </Button>
    </>
  )
}
