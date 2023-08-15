import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, pipe } from 'rxjs';

import { BaseProject } from '../_models/base-project.component';
import { GoogleInternship2020Component } from '../projects/google-internship2020/google-internship2020.component';
import { GoogleInternship2021Component } from '../projects/google-internship2021/google-internship2021.component';
import { GoogleInternship2022Component } from '../projects/google-internship2022/google-internship2022.component';
import { MontavieComponent } from '../projects/montavie/montavie.component';
import { RainydayloverComponent } from '../projects/rainydaylover/rainydaylover.component';
import { title } from 'process';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @ViewChild('dropdown') dropdown!: ElementRef;

  projects: BaseProject[] = allProjects
  selectedProject = 'All Projects'

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (params['s']) {
          this.changeDropDown(params['s'])
        }
      })
  }

  toggleDropDown() {
    this.dropdown.nativeElement.classList.toggle("active")
  }

  selectDropDown(selection?: string) {
    this.router.navigate([], { relativeTo: this.route, queryParams: {s: selection} })
  }

  changeDropDown(selection?: string) {
    if (selection && selection != "all") {
      this.projects = allProjects.filter(project => project.hashtags.has(selection))
      this.selectedProject = selections[selection];
    } else {
      this.projects = allProjects
      this.selectedProject = selections["all"]
    }
  }
}

type SelectionName = {
  [key: string]: string;
};

const selections : SelectionName = {
  "all": "All Projects",
  "featured": "Featured",
  "carnegie-mellon": "Carnegie Mellon",
  "internships": "Internships",
}

const allProjects : BaseProject[] = [
  new GoogleInternship2022Component(),
  new GoogleInternship2021Component(),
  new GoogleInternship2020Component(),
  new MontavieComponent(),
  new RainydayloverComponent()
]
