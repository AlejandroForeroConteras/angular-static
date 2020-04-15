import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  category: string;
  cities: any;
  constructor(route: ActivatedRoute, private http: HttpClient) {
    this.category = route.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.http.get('/assets/mocks/cities.json').subscribe(
      cities => this.cities = cities
    );
  }

}
