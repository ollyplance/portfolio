import { Component, Input, OnInit } from '@angular/core';

import { Project } from '../_models/base-project.component';

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

}
