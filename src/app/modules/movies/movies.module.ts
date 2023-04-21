import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieRoutingModule } from './movies-routing.module';
import { ContainerMoviesComponent } from './container/container-movies/container-movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [MoviesListComponent, ContainerMoviesComponent, MovieCardComponent, ModalComponent],
  imports: [CommonModule, MovieRoutingModule],
})
export class MoviesModule {}
