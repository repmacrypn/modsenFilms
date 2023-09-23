import {AboutUs} from '@/components/Footer/AboutUs/index'
import {SocialMedia} from '@/components/Footer/SocialMedia/index'

import {CompanyRights, Container, FooterWrapper} from './styled'

export const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <AboutUs />
        <SocialMedia />
      </FooterWrapper>
      <CompanyRights>2023 Modsen company</CompanyRights>
    </Container>
  )
}
