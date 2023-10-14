import {FilmTrailer, TrailerSource, TrailerType} from '@/types/filmTrailer'

//This code is a pattern of getting a trailer key. Due to the problem of having an empty trailer response
//we have to process this situation therefore we will enjoy the moonlight sonata xxD

export const getYouTubeTrailerKey = (trailerData: FilmTrailer[] | undefined) => {
  const trailerBaseURL = 'https://www.youtube-nocookie.com/embed/'
  const trailer = trailerData?.find(
    (t) => t.type === TrailerType.Trailer && t.site === TrailerSource.YouTube
  )

  return trailer?.key ? trailerBaseURL + trailer.key : `${trailerBaseURL}4Tr0otuiQuU`
}
