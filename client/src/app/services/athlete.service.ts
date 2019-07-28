import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Athlete } from '../athletes/athlete';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  athlete: any;

  url = '/api/athletes/add';
  constructor(private http: HttpClient) { }

  createAthlete(athlete) {
    return this.http.post<any>(this.url, athlete);
  }

  getAthletes(): Observable<Athlete[]> {
    return this.http.get<Athlete[]>(this.url);
  }

  // createAthlete(athlete: Athlete): Observable<Athlete> {
  //   return this.http.post<Athlete>(this.url, athlete, this.httpOptions).pipe(
  //     tap((athlete: Athlete) => this.log(`added athlete w/ id=${athlete.id}`)),
  //     catchError(this.handleError<Athlete>('createAthlete'))
  //   );
  // }
}
