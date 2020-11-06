import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie : Movie = {
    title : '',
    year : 0,
    image : '',
    ratings : 0,
    trailer : '',
    id : ''
  } 

  movieList : Movie[];

  constructor( private movieService : MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }
  RandomString() : string{
    return Math.floor(Math.random() * Math.floor(30000)).toString();
  }
  
  save() {
    
    this.movie.id = this.RandomString();
    const tempMovie: Movie = { ...this.movie }
    this.movieList.unshift(tempMovie)
  }
  
  loadMovies() : void {
    this.movieList = this.movieService.getAllMovies();
  }

  delete(movie: Movie) : void{
    this.movieList.forEach((item, index) => {
      if (item === movie) {
        this.movieList.splice(index, 1)
      }
    })
  }

  

}
