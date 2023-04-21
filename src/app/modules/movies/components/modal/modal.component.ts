import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IMovie } from '../../../../interfaces/movie';
import { MovieService } from '../../../../services/movie.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public movie: IMovie = {};

  constructor(
    public dialog: MatDialog,
    private moviService: MovieService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public ngOnInit(): void {
    this.moviService.getMovieById(this.data.imdbID).subscribe((data) => {
      this.movie = data;
    });
  }

  public closeModal() {
    this.dialog.closeAll();
  }
}
