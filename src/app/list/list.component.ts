import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {IPosts} from "../Interfaces/main-interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts;
  constructor(private http: ApiService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.http.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    } );
  }

  openPost(){
    this.router.navigate([`/post`])

  }

}
