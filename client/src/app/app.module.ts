import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AthleteCreateComponent } from './athletes/athlete-create/athlete-create.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AthleteProfileComponent } from './athletes/athlete-profile/athlete-profile.component';
import { ValidateService } from './services/validate.service';

import { AthleteService } from './services/athlete.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AthletesComponent } from './athletes/athletes/athletes.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add', component: AthleteCreateComponent},
  {path: 'profile', component: AthleteProfileComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    AthleteCreateComponent,
    HomeComponent,
    NavbarComponent,
    AthleteProfileComponent,
    AthletesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AthleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
