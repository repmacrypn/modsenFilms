import styled from 'styled-components'

export const FilmCardLoader = styled.div`
  position: relative;
  max-width: 332px;
  width: 100%;
  padding-bottom: 84.25%;
  overflow: hidden;
  transition: all 0.3s ease;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    transform: translateX(-100%);
    animation: shimmer 1.5s infinite;
    background-image: ${(props) => props.theme.colors.skeletonShimmer};

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  }

  @media (max-width: 600px) {
    padding-bottom: 280px;
  }

  @media (max-width: 362px) {
    padding-bottom: 240px;
  }
`

export const PreviewLoader = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  max-height: 186px;
  height: 66%;
  background-color: ${(props) => props.theme.colors.skeletonMain};

  @media (max-width: 1000px) {
    height: 64%;
  }

  @media (max-width: 320px) {
    height: 55%;
  }
`

export const AvatarLoader = styled.div`
  position: absolute;
  bottom: -50px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.skeletonMain};
`

export const ContentLoader = styled.div`
  position: absolute;
  right: 0px;
  left: 48px;
  bottom: -42px;
  width: 100%;
  height: 14px;
  background-color: ${(props) => props.theme.colors.skeletonMain};

  &:nth-child(2) {
    bottom: -64px;
  }
`
