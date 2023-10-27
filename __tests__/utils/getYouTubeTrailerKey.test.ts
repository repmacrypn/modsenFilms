import {trailerData1, trailerData2} from '@/utils/constants/selectedFilmForTest'
import {getYouTubeTrailerKey} from '@/utils/helpers/getYouTubeTrailerKey'

describe('testing the getYouTubeTrailerKey utility helper', () => {
  it('should display an appropriate key, trailerData.length = 1, there is a valid key', () => {
    expect(getYouTubeTrailerKey(trailerData1)).toEqual(
      'https://www.youtube-nocookie.com/embed/E06pl2dACSY'
    )
  })
  it('should display an appropriate key, trailerData.length = 1, the key is an empty string', () => {
    expect(getYouTubeTrailerKey(trailerData2)).toEqual(
      'https://www.youtube-nocookie.com/embed/4Tr0otuiQuU'
    )
  })
})
