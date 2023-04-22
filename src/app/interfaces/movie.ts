export interface IMovie {
  Title?: string;
  Year?: string;
  imdbID?: string;
  Type?: string;
  Poster?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Writer?: string;
  Director?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Ratings?: IRatings[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
}

export interface IDataMovie<T> {
  Search: IMovie[] | T;
}

export interface IRatings {
  Source: string;
  Value: string;
}
