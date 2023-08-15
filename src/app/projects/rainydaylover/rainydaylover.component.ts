import { Component, OnInit } from '@angular/core';

import { BaseProject } from 'src/app/_models/base-project.component';

@Component({
  selector: 'app-rainydaylover',
  templateUrl: './rainydaylover.component.html',
  styleUrls: ['./rainydaylover.component.scss']
})
export class RainydayloverComponent extends BaseProject implements OnInit {

  constructor() { 
    super()
    this.title = "RainyDayLover"
    this.description = "An iOS application"
    this.imageLocation = "../../assets/rainydaylover.png"
    this.routerLink = "/rainydaylover",
    this.hashtags = new Set(["iOS", "projects"])
  }

}
