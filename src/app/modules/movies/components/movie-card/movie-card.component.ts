import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../../../interfaces/movie';
import { MovieDataService } from '../../../../services/movie-data.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  public movies: IMovie[] = [];

  constructor(private movieData: MovieDataService) {}

  public ngOnInit(): void {
    this.movieData.getMovieData().subscribe((data) => {
      this.movies = data;
    });
  }
}
