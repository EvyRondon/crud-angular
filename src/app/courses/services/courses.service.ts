import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list() {
    return [
      { _id: "1", name: 'Angular', category: 'front-end'},
      { _id: "2", name: 'Spring Boot', category: 'back-end'}
    ];
  }
}
