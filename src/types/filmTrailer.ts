export interface FilmTrailerResponse {
  id: number
  results: FilmTrailer[]
}

export interface FilmTrailer {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: TrailerSource
  size: number
  type: TrailerType
  official: boolean
  published_at: string
  id: string
}

export enum TrailerType {
  Teaser = 'Teaser',
  Featurette = 'Featurette',
  Trailer = 'Trailer'
}

export enum TrailerSource {
  YouTube = 'YouTube'
}
