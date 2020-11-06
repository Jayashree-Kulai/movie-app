import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/allMovies',
    pathMatch : 'full'
  },

  {
    path : 'allMovies',
    component : MovieComponent
  },

  {
    path : 'allMovies/:movieid',
    component : MoviedetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
