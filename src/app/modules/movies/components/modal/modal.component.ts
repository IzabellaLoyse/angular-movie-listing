import { state, style, trigger } from '@angular/animations';
import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { catchError, delay, throwError } from 'rxjs';
import { IMovie } from '../../../../interfaces/movie';
import { ErrorService } from '../../../../services/error.service';
import { MovieService } from '../../../../services/movie.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [trigger('openClose', [state('open', style({}))])],
})
export class ModalComponent implements OnInit {
  public hasErrorEmitter = new EventEmitter<boolean>();

  public movie: IMovie = {};
  public isLoading = false;
  public hasError = false;

  constructor(
    public dialog: MatDialog,
    private movieService: MovieService,
    private errorService: ErrorService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public ngOnInit(): void {
    this.isLoading = true;

    this.movieService
      .getMovieById(this.data.imdbID)
      .pipe(
        delay(2000),
        catchError((error) => {
          this.errorService.openSnackBar('Ocorreu um erro ao carregar o filme');
          this.isLoading = false;
          this.hasError = true;
          this.hasErrorEmitter.emit(true);

          return throwError(() => error);
        })
      )
      .subscribe((data) => {
        this.movie = data;
        this.isLoading = false;
      });
  }

  public closeModal() {
    this.dialog.closeAll();
  }
}
