import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPosts} from "./Interfaces/main-interfaces";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<IPosts>(`https://jsonplaceholder.typicode.com/posts`)

  }
  getPost(id) {
    // return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return this.http.get('https://jsonplaceholder.typicode.com/posts/',id)
  }

}
