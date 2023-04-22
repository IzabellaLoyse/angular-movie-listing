import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
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
  ],
  imports: [CommonModule, MovieRoutingModule, SharedModule],
})
export class MoviesModule {}
