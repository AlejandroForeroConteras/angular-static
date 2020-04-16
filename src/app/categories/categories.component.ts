import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  id: string;
  todo: any;
  constructor(route: ActivatedRoute, private http: HttpClient) {
    this.id = route.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.http.get(`https://jsonplaceholder.typicode.com/todos/${this.id}`).subscribe(
      todo => this.todo = todo
    );
  }

}
