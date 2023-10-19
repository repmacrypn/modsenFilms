import noPosterImage from '@/assets/images/noPosterImage.png'
import noPosterPreview from '@/assets/images/noPosterPreview.png'

//this code helps us to get access to the full image path according to its type

type ImageType = 'poster' | 'preview'

export const getImagePath = (apiPath: string, type: ImageType) => {
  return apiPath
    ? `https://image.tmdb.org/t/p/w780${apiPath}`
    : type === 'poster'
    ? noPosterImage
    : noPosterPreview
}
