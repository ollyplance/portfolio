import { Component, OnInit } from '@angular/core';

import { BaseProject } from 'src/app/_models/base-project.component';

@Component({
  selector: 'app-montavie',
  templateUrl: './montavie.component.html',
  styleUrls: ['./montavie.component.scss']
})
export class MontavieComponent extends BaseProject implements OnInit {

  constructor() {
    super()
    this.title = "Montavie"
    this.description = "Created a social media iOS application for sharing images and descriptions for my thru-hike on the AT.", 
    this.imageLocation = "../../assets/montavie.png"
    this.routerLink = "/montavie"
    this.hashtags = new Set(["projects", "featured"])
  }

}
