import styled from 'styled-components'

export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5.95px;
  transition: all 0.3s ease;
  will-change: transform;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  @media (min-width: 243px) and (max-width: 320px) {
    gap: 0.51px;
  }
`

export const LogoTitle = styled.div`
  transition: all 0.3s ease;
  font-weight: 700;
  font-size: 18px;
`

export const LogoImage = styled.img`
  width: 29px;
  height: 20px;
`
