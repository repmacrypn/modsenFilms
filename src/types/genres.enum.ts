export enum Genres {
  Action = 28,
  Adventure = 12,
  All = '',
  Crime = 80,
  Drama = 18,
  Documentary = 99,
  Romance = 10749,
  Horror = 27,
}

export type GenreValue = keyof typeof Genres
