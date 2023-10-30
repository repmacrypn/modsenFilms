import facebook from '@/assets/images/facebook.svg'
import instagram from '@/assets/images/instagram.svg'
import linkedin from '@/assets/images/linkedin.svg'
import twitter from '@/assets/images/twitter.svg'

export const socialMedia: SocialMedia[] = [
  {
    media: 'linkedIn',
    img: linkedin,
    url: 'https://www.linkedin.com/company/modsen/',
  },
  {
    media: 'instagram',
    img: instagram,
    url: 'https://www.instagram.com/modsencompany/',
  },
  {
    media: 'facebook',
    img: facebook,
    url: 'https://www.facebook.com/ModsenSoftware',
  },
  {
    media: 'twitter',
    img: twitter,
    url: 'https://twitter.com/modsencompany',
  },
]

interface SocialMedia {
  media: string
  img: string
  url: string
}
