import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IDataMovie, IMovie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getMovies(title: string): Observable<IDataMovie<IMovie[]>> {
    return this.http.get<IDataMovie<IMovie[]>>(`${this.apiUrl}&s=${title}`);
  }

  public getMovieById(id: string): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.apiUrl}&i=${id}`);
  }
}
