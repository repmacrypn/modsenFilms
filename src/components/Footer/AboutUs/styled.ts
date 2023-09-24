import styled from 'styled-components'

import {website} from '@/utils/constants/aboutUsData'

export const AboutUsDataWrapper = styled.div`
  display: flex;
  gap: 42px;

  @media (max-width: 766px) {
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
  }

  @media (max-width: 412px) {
    justify-content: flex-start;
  }
`

export const AboutUsDataBlock = styled.div`
  margin-bottom: 2px;
`

export const Link = styled.a.attrs({
  href: website,
  target: '_blank'
})`
  display: block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.fontLink};
  font-size: 20px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    color: #ff8a00;
  }

  @media (max-width: 583px) {
    font-size: 14px;
  }
`
