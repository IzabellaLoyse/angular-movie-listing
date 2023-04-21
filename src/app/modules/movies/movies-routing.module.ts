import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerMoviesComponent } from './container/container-movies/container-movies.component';

const routes: Routes = [{ path: '', component: ContainerMoviesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
