import { Component, OnInit } from '@angular/core';

import { BaseProject } from 'src/app/_models/base-project.component';

@Component({
  selector: 'app-google-internship2021',
  templateUrl: './google-internship2021.component.html',
  styleUrls: ['./google-internship2021.component.scss']
})
export class GoogleInternship2021Component extends BaseProject implements OnInit {

  constructor() { 
    super()    
    this.title = "2021 Google Internship"
    this.description = "Worked alongside Google Cloud Compute FE team to migrate existing pages to Angular."
    this.imageLocation = "../../assets/2021swe.png"
    this.routerLink = "/google2021"
    this.hashtags = new Set(["internships"])
  }

}
