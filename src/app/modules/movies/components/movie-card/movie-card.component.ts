import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IMovie } from '../../../../interfaces/movie';
import { MovieDataService } from '../../../../services/movie-data.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit, OnDestroy {
  private movieCardSubscription!: Subscription;

  public movies: IMovie[] = [];

  constructor(public dialog: MatDialog, private movieData: MovieDataService) {}

  public ngOnInit(): void {
    this.movieCardSubscription = this.movieData
      .getMovieData()
      .subscribe((data) => {
        this.movies = data;
      });
  }

  public openModal(movie: IMovie) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: `Detalhes do filme: ${movie.Title}`,
        imdbID: movie.imdbID,
      },
    });

    dialogRef.componentInstance.hasErrorEmitter.subscribe(() => {
      dialogRef.close();
    });
  }

  public ngOnDestroy(): void {
    this.movieCardSubscription.unsubscribe();
  }
}
