import styled from 'styled-components'

export const Trailer = styled.iframe.attrs<{ src: string }>(({ src }) => ({
  src,
  title: 'YouTube trailer player',
  allow: 'accelerometer; clipboard-write; encrypted-media; gyroscope; web-share',
  allowFullScreen: true,
}))`
  width: 90%;
  height: 90%;

  @media screen {
    width: 100%;
    height: 100%;
  }
`
