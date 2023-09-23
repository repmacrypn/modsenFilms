import {AboutUsDataBlock, AboutUsDataWrapper, Link} from './styled'

export const AboutUs = () => {
  return (
    <AboutUsDataWrapper>
      <AboutUsDataBlock>
        <Link>TermsPrivacyPolicy & Safety</Link>
        <Link>How YouTube works</Link>
        <Link>Test new features</Link>
      </AboutUsDataBlock>
      <AboutUsDataBlock>
        <Link>About Press Copyright</Link>
        <Link>Contact us Creators</Link>
        <Link>Advertise Developers</Link>
      </AboutUsDataBlock>
    </AboutUsDataWrapper>
  )
}
