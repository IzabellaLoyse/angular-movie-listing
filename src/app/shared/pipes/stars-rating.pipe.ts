import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../../interfaces/movie';

@Pipe({
  name: 'starsRating',
})
export class StarsRatingPipe implements PipeTransform {
  transform(rating: IMovie['imdbRating']): string {
    const stars = Math.round(Number(rating) / 2);
    return '⭐'.repeat(stars);
  }
}
