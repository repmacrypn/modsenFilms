import styled from 'styled-components'

export const FilmWrapper = styled.div<{ isFetching?: boolean }>`
  width: 100%;
  max-width: 332px;
  max-height: 283px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 20px ${(props) => props.theme.colors.boxShadow};
    transform: scale(1.05);
    cursor: pointer;
  }
`

export const FilmImage = styled.img`
  width: 100%;
  max-height: 186px;
  object-fit: cover;
`

export const FilmInfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 0 31px;
`

export const AvatarPhoto = styled.img`
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`

export const FilmName = styled.div`
  max-width: 284px;
  padding: 12px 0 4px;
  overflow-wrap: break-word;
  font-size: 16px;
`

export const FilmAuthorYear = styled.div`
  max-width: 284px;
  overflow-wrap: break-word;
  font-size: 14px;
`
