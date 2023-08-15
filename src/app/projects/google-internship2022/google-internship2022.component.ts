import { Component, OnInit } from '@angular/core';

import { BaseProject } from 'src/app/_models/base-project.component';

@Component({
  selector: 'app-google-internship2022',
  templateUrl: './google-internship2022.component.html',
  styleUrls: ['./google-internship2022.component.scss']
})
export class GoogleInternship2022Component extends BaseProject implements OnInit {

  constructor() {
    super()
    this.title = "2022 Google Internship"
    this.description = "Worked on a high impact project within the Fuchsia Graphics team to develop a new API and a demo for screen recording within the OS using C++."
    this.imageLocation = "../../assets/2022swe.jpg"
    this.routerLink = "/google2022"
    this.hashtags = new Set(["internships", "featured"])
  }

}
