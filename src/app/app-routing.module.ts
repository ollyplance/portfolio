import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GoogleInternship2020Component } from './projects/google-internship2020/google-internship2020.component';
import { GoogleInternship2021Component } from './projects/google-internship2021/google-internship2021.component';
import { GoogleInternship2022Component } from './projects/google-internship2022/google-internship2022.component';
import { HomeComponent } from './home/home.component';
import { MontavieComponent } from './projects/montavie/montavie.component';
import { NgModule } from '@angular/core';
import { RainydayloverComponent } from './projects/rainydaylover/rainydaylover.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: HomeComponent },
  { path: 'portfolio/:id', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
