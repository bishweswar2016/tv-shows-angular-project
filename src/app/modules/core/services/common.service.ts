import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  getTvShowsByGenre = (data, genre) => {
      data = data.filter(function(show){return show.genres.indexOf(genre) >= 0?show:"";});
      return this.getTvShowsOrderByRating(data);
  }
  getTvShowsOrderByRating = (data) => {
    data.sort((a: any, b: any) => {
      if (a.rating.average > b.rating.average) {
        return -1;
      } else if (a.rating.average < b.rating.average) {
        return 1;
      } else {
        return 0;
      }
    });
    return data;
  }
}
