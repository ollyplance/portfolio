import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from '@angular/cdk/dialog';
import { HomeComponent } from './home/home.component';
import { MontavieComponent } from './projects/montavie/montavie.component';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    MontavieComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PortalModule, DialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
