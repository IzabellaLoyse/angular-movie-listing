import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IMovie } from '../../../../interfaces/movie';
import { ErrorService } from '../../../../services/error.service';
import { MovieDataService } from '../../../../services/movie-data.service';
import { MovieService } from '../../../../services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  public movies: IMovie[] = [];

  constructor(
    private movieService: MovieService,
    private movieData: MovieDataService,
    private errorService: ErrorService
  ) {}

  public ngOnInit(): void {}

  public searchMovie(event: any): void {
    const value = event.target.value.toLowerCase();

    this.movieService
      .getMovies(value)
      .pipe(
        catchError((error) => {
          this.errorService.openSnackBar('Ocorreu um erro ao buscar o filme');

          return throwError(() => error);
        })
      )
      .subscribe((data) => {
        this.movieData.setMovieData(data.Search);
        this.movies = data.Search;
      });
  }
}
