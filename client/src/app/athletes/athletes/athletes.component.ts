import { Component, OnInit } from '@angular/core';
import { Athlete } from '../athlete';
import { AthleteService } from '../../services/athlete.service';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.css']
})
export class AthletesComponent implements OnInit {
  athletes: Athlete[];

  constructor(private athleteService: AthleteService) { }

  ngOnInit() {
    // this.getAthletes();
  }

  // getAthletes(): void {
  //   this.athleteService.getAthletes()
  //     .subscribe(athletes => this.athletes = athletes);
  // }

}
