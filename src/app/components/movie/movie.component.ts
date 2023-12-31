import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  type='';
  id=''
  url = '';
  movies: any;
  movie: any;
  name:any;
  rating:any;
  review:any;

  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type']
    this.id = this.route.snapshot.params['id']
    if (this.type === 'trending') {
      this.url = 'https://shrikarthik07.github.io/basicProject/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'https://shrikarthik07.github.io/basicProject/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'https://shrikarthik07.github.io/basicProject/assets/data/popular-movies.json';
    }
    this.getMovie()
  }

  getMovie(){ 
    this.http.get(this.url).subscribe((movies)=>{
      this.movies=movies
      let index = this.movies.findIndex(
        (movie: { id: string })=> movie.id == this.id
      )
      if(index > -1){
        this.movie = this.movies[index]
      }
    })
  }

  onSubmit(){
    console.log(this.name)
    console.log(this.rating)
    console.log(this.review)
  }

}
