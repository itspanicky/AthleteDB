import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateAthlete(athlete) {
    if ( athlete.name === undefined
      || athlete.gender === undefined
      || athlete.dob === undefined
      || athlete.nationality === undefined
      || athlete.sport === undefined ) {
      return false;
    } else {
      return true;
    }
  }
}
