import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './components/loader/loader.component';
import { StarsRatingPipe } from './pipes/stars-rating.pipe';

@NgModule({
  declarations: [StarsRatingPipe, LoaderComponent],
  imports: [CommonModule],
  exports: [StarsRatingPipe, LoaderComponent],
})
export class SharedModule {}
