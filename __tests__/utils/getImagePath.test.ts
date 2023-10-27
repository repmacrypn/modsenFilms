import {getImagePath} from '@/utils/helpers/getImagePath'
import noPosterPreview from '@/assets/images/noPosterPreview.png'

describe('testing the getImagePath utility helper', () => {
  test('should properly return image path', () => {
    const apiPath1 = 'E06pl2dACSY'
    const apiPath2 = ''

    const type1 = 'poster'
    const type2 = 'preview'

    expect(getImagePath(apiPath1, type1)).toEqual(
      'https://image.tmdb.org/t/p/w780E06pl2dACSY'
    )
    expect(getImagePath(apiPath2, type2)).toEqual(noPosterPreview)
  })
})
