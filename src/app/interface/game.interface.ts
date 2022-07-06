export interface GamesDTO {
  results: Game[];
  info: any;
}

export interface Game {
  games: GamesName,
  games_count: Number,
  id: Number,
  image: null,
  image_background: String,
  name: String,
  slug: String,
  year_end: null,
  year_start: null,
}

export interface GamesName {
  added: Number,
  id: Number,
  name: String,
  slug: String,
}
