import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 10%;
  max-width: 80%;
  width: 100%;
  max-height: 450px;
  min-height: 100px;
  padding: 14px 0px;
  z-index: 8;
  overflow: auto;
  background: ${(props) => props.theme.colors.mainBackColor};
  color: ${(props) => props.theme.colors.mainFont};
  box-shadow: 0px 4px 12px orange;
  transition: all 0.3s ease;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(196, 196, 196, 0.8);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff8a00;
    border-radius: 8px;
  }
`

export const FilmCard = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  z-index: 5;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 20px ${(props) => props.theme.colors.boxShadow};
    transform: scale(0.95);
    cursor: pointer;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    position: relative;
  }
`

export const FilmImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt
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

export const TotalFilmsCount = styled.p`
  font-style: italic;
  padding: 0 10px;
`
