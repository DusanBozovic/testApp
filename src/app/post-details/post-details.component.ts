import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private http: ApiService) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost () {
    const id = 5;
    this.http.getPost(id).subscribe(data => {
      console.log(data, 'test');
    })
  }

}
