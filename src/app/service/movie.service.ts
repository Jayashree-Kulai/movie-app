import { Injectable } from '@angular/core';
import { Movie } from '../components/movie/movie';
import { MOVIES } from '../components/movie/mockMovieList';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getAllMovies() : Movie[] {
    return MOVIES;
  }

  getMovie(movieid : string) : Movie {
    return MOVIES.find(movie => movie.id === movieid)
  }
}
