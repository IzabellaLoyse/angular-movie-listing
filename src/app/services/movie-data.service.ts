import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  private movieDataSubject = new BehaviorSubject<IMovie[]>([]);

  constructor() {}

  public setMovieData(movieData: IMovie[]) {
    this.movieDataSubject.next(movieData);
  }

  public getMovieData() {
    return this.movieDataSubject.asObservable();
  }
}
