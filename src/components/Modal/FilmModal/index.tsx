import {X} from 'tabler-icons-react'

import {AppLoader} from '@/components/Loader/AppLoader'
import {Modal} from '@/components/Modal/index'
import {getYouTubeTrailerKey} from '@/utils/helpers/getYouTubeTrailerKey'
import {useFetchFilmTrailerQuery} from '@/store/services/filmsService'
import {YouTubeTrailerPlayer} from '@/components/YouTubeTrailerPlayer'
import {Button} from '@/components/Button'

import {IFilmModal} from './interface'

export const FilmModal = ({filmId, handleModalClick}: IFilmModal) => {
  const {data: filmTrailerResponse, isFetching} = useFetchFilmTrailerQuery(filmId!, {
    skip: !filmId
  })

  const traillerURL = getYouTubeTrailerKey(filmTrailerResponse?.results)

  return (
    <>
      <Modal onModalClick={handleModalClick} isActive={!!filmId}>
        {isFetching && <AppLoader />}
        {traillerURL && !isFetching && <YouTubeTrailerPlayer trailerKey={traillerURL} />}
      </Modal>
      <Button isActive={!!filmId} type='closeButton' callBack={handleModalClick}>
        <X strokeWidth={2.25} />
      </Button>
    </>
  )
}
