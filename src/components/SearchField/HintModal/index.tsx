import {useRef} from 'react'

import {useFetchFilmsByTitleQuery} from '@/store/services/filmsService'
import {Loader} from '@/components/Loader/AppLoader/styled'
import {useFilmModalControl} from '@/hooks/useFilmModalControl'
import {FilmModal} from '@/components/Modal/FilmModal'
import {useOutsideClick} from '@/hooks/useOutsideClick'
import {getImagePath} from '@/utils/helpers/getImagePath'

import {IHintModal} from './interface'

import {
  Container,
  FilmCard,
  FilmImage,
  FilmInfoWrapper,
  FilmTitle,
  FilmOverview,
  TotalFilmsCount
} from './styled'

export const HintModal = ({searchValue, setIsHintModalOpen}: IHintModal) => {
  const hintModalNode = useRef<HTMLDivElement>(null)

  const {data: filmsByQuery, isFetching} = useFetchFilmsByTitleQuery(
    {page: 1, query: searchValue},
    {skip: !searchValue}
  )

  const {handleFilmClick, handleModalCloseClick, selectedFilmId} = useFilmModalControl()

  useOutsideClick(hintModalNode, () => setIsHintModalOpen(false))

  const handleSearchedFilmClick = (filmId: number) => {
    handleFilmClick(filmId)
    /* setIsHintModalOpen(false) */
  }

  return (
    <Container ref={hintModalNode}>
      {isFetching && <Loader />}
      {filmsByQuery?.results.map((f) => (
        <FilmCard onClick={() => handleSearchedFilmClick(f.id)} key={f.id}>
          <FilmImage src={getImagePath(f.backdrop_path, 'poster')} alt={f.title} />
          <FilmInfoWrapper>
            <FilmTitle>{f.title}</FilmTitle>
            <FilmOverview>
              {f.overview || 'Unfortunately there is no film description...'}
            </FilmOverview>
          </FilmInfoWrapper>
        </FilmCard>
      ))}
      {filmsByQuery?.total_results && (
        <TotalFilmsCount>Total films count: {filmsByQuery.total_results}</TotalFilmsCount>
      )}
      <FilmModal handleModalClick={handleModalCloseClick} filmId={selectedFilmId} />
    </Container>
  )
}
