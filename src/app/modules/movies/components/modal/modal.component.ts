import { state, style, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
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
  public movie: IMovie = {};

  constructor(
    public dialog: MatDialog,
    private moviService: MovieService,
    private errorService: ErrorService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public ngOnInit(): void {
    this.moviService
      .getMovieById(this.data.imdbID)
      .pipe(
        catchError((error) => {
          this.errorService.openSnackBar('Ocorreu um erro ao carregar o filme');

          return throwError(() => error);
        })
      )
      .subscribe((data) => {
        this.movie = data;
      });
  }

  public closeModal() {
    this.dialog.closeAll();
  }
}
