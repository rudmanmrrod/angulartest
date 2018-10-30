import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	repos: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://api.github.com/users/rudmanmrrod/repos').subscribe(response => {
      this.repos = response
    })
  }

}
