import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMovie } from '../../../../interfaces/movie';
import { MovieDataService } from '../../../../services/movie-data.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  public movies: IMovie[] = [];

  constructor(public dialog: MatDialog, private movieData: MovieDataService) {}

  public ngOnInit(): void {
    this.movieData.getMovieData().subscribe((data) => {
      this.movies = data;
    });
  }

  public openModal(movie: IMovie) {
    this.dialog.open(ModalComponent, {
      data: {
        title: `Detalhes do filme: ${movie.Title}`,
        message: 'This is a message',
        imdbID: movie.imdbID,
      },
    });
  }
}
