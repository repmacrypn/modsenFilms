import styled from 'styled-components'

export const FilmCard = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  z-index: 5;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 2px 14px ${(props) => props.theme.colors.boxShadow};
    transform: scale(0.98);
    cursor: pointer;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    position: relative;
  }
`

export const FilmImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  align-self: center;
  width: 192px;

  @media (max-width: 570px) {
    width: 125px;
  }

  @media (max-width: 480px) {
    position: absolute;
    top: 55px;
    width: 94%;
    max-height: 200px;
  }
`

export const FilmInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const FilmTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    margin-top: 5px;
  }

  @media (max-width: 480px) {
    padding-bottom: 64%;
  }
`

export const FilmOverview = styled.p`
  display: -webkit-box;
  z-index: 4;
  -webkit-line-clamp: 6;
  overflow: hidden;
  -webkit-box-orient: vertical;

  @media (max-width: 700px) {
    -webkit-line-clamp: 5;
  }
`
