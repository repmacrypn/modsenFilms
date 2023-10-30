import styled from 'styled-components'

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 26.67px;

  @media (max-width: 766px) {
    margin: 0 auto;
  }
`

export const MediaLink = styled.a.attrs((props) => ({
  href: props.href,
  target: '_blank',
}))`
  display: inline-block;
  width: 16px;
  height: 16px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    transform: scale(0.9);
  }
`

export const MediaImg = styled.img.attrs((props) => ({
  alt: props.alt,
  src: props.src,
}))`
  display: block;
  width: 100%;
  height: 100%;
`
