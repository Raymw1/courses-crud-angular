import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'Front-end' },
      { _id: '2', name: 'Spring Boot', category: 'Back-end' },
      { _id: '3', name: 'React', category: 'Front-end' },
      { _id: '4', name: 'AWS', category: 'DevOps' },
    ];
  }
}
