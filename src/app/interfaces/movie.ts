export interface IMovie {
  Title: string;
  year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IDataMovie<T> {
  Search: IMovie[] | T;
}
