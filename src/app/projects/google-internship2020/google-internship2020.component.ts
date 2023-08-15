import { Component, OnInit } from '@angular/core';

import { BaseProject } from 'src/app/_models/base-project.component';

@Component({
  selector: 'app-google-internship2020',
  templateUrl: './google-internship2020.component.html',
  styleUrls: ['./google-internship2020.component.scss']
})
export class GoogleInternship2020Component extends BaseProject implements OnInit {

  constructor() { 
    super()
    this.title = "2020 SWE Internship"
    this.description = "Developed a full-stack portfolio website using Java Servlets, Datastore, and other Google APIs." 
    this.imageLocation = "../../assets/2020swe.jpg"
    this.routerLink = "/google2020"
    this.hashtags = new Set(["internships"])
  }

}
