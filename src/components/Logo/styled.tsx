import styled from 'styled-components'

export const LogoWrapper = styled.div`
  display: flex;
  gap: 5.95px;

  @media (min-width: 243px) and (max-width: 320px) {
    gap: 0.51px;
  }
`

export const LogoTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
`

export const LogoImage = styled.img`
  width: 28.55px;
  height: 20.17px;
`
