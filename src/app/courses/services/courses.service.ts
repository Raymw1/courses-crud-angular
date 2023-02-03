import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './../model/course';
import { delay, first, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly apiServerUrl = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.apiServerUrl).pipe(
      // take(1),
      first(),
      delay(5000),
      tap((courses: Course[]) => console.log(courses))
    );
  }
}
