import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  ratingAvg = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('4.5');

      return resolve(4.5);
    }, 2000);
  });

  searchString: string;

  movies: any = [
    {
      name: 'RRR',
      genre: 'Action/Fantasy',
      date: new Date(),
    },
    {
      name: 'The Batman',
      genre: 'Horror',
      date: new Date(),
    },
    {
      name: 'Doctor strange',
      genre: 'Superhero',
      date: new Date(),
    },
    {
      name: 'Kashmir Files',
      genre: 'Crime',
      date: new Date(),
    },
    {
      name: 'The Woman in the House Across the Street from the Girl in the Window',
      genre: 'Horror',
      date: new Date(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSearch() {
    console.log(this.searchString);
  }

  onAddMovie() {
    this.movies.push({
      name: 'SUPERMAN',
      genre: 'movie',
      date: new Date(),
    });
  }
}
