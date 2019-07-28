import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AthleteService } from '../../services/athlete.service';
import { Athlete } from '../athlete';

@Component({
  selector: 'app-athlete-create',
  templateUrl: './athlete-create.component.html',
  styleUrls: ['./athlete-create.component.css']
})

export class AthleteCreateComponent implements OnInit {
  name: string;
  gender: string;
  dob: string;
  nationality: string;
  sport: string;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private athleteService: AthleteService
  ) { }

  onFormSubmit(formInput: HTMLTextAreaElement) {
    const athlete = {
      name: this.name,
      gender: this.gender,
      dob: this.dob,
      nationality: this.nationality,
      sport: this.sport
    };

    // if (!this.validateService.validateAthlete(athlete)) {
    //   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
    //   return false;
    // } else {
    //   this.athleteService.createAthlete(athlete)
    //   // .subscribe(athlete => this.athletes.push(athlete));
    //     .subscribe(
    //       data => console.log('Success', data),
    //       error => console.log('Error', error)
    //     );
    // }
  }


  ngOnInit() {

  }
}
