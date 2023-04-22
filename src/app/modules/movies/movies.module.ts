import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarsRatingPipe } from '../../pipes/stars-rating.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ContainerMoviesComponent } from './container/container-movies/container-movies.component';
import { MovieRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    MoviesListComponent,
    ContainerMoviesComponent,
    MovieCardComponent,
    ModalComponent,
    StarsRatingPipe,
  ],
  imports: [CommonModule, MovieRoutingModule],
})
export class MoviesModule {}
