import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie/movie';
import { MovieService } from 'src/app/service/movie.service';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  movie : Movie;

  constructor(private movieService : MovieService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('movieid');
    this.loadMovie(id);
    
  }
  loadMovie(id:string) : void {
    this.movie = this.movieService.getMovie(id);
  }

}
