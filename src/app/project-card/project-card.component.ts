import { Component, Input, OnInit } from '@angular/core';

import { Project } from '../_models/base-project.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;
  
  constructor() { }

  ngOnInit(): void {
  }

  formatProjectDate(d?: Date) {
    if (d != undefined) {
      return formatDate(d!, "MM/yyyy", "en-US")
    } else {
      return "Present"
    }
  }

}
