import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarsRatingPipe } from './pipes/stars-rating.pipe';

@NgModule({
  declarations: [StarsRatingPipe],
  imports: [CommonModule],
  exports: [StarsRatingPipe],
})
export class SharedModule {}
