import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../../../services/movie-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private movieData: MovieDataService) {}

  public ngOnInit(): void {}
}
