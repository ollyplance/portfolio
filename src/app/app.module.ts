import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { GoogleInternship2022Component } from './projects/google-internship2022/google-internship2022.component';
import { GoogleInternship2021Component } from './projects/google-internship2021/google-internship2021.component';
import { GoogleInternship2020Component } from './projects/google-internship2020/google-internship2020.component';
import { MontavieComponent } from './projects/montavie/montavie.component';
import { RainydayloverComponent } from './projects/rainydaylover/rainydaylover.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    GoogleInternship2022Component,
    GoogleInternship2021Component,
    GoogleInternship2020Component,
    MontavieComponent,
    RainydayloverComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
