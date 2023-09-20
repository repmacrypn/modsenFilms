import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 28px 13px 10px;
`

export const FilmCard = styled.div`
  max-width: 332px;
  max-height: 283px;
`

export const FilmImage = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 186px;
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
`

export const FilmName = styled.div`
  padding: 12px 0 4px;
  font-size: 16px;
`

export const FilmAuthorYear = styled.div`
  font-size: 14px;
`
