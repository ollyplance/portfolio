import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { Dialog } from '@angular/cdk/dialog';
import { GoogleInternship2020Component } from '../projects/google-internship2020/google-internship2020.component';
import { GoogleInternship2021Component } from '../projects/google-internship2021/google-internship2021.component';
import { GoogleInternship2022Component } from '../projects/google-internship2022/google-internship2022.component';
import { MontavieComponent } from '../projects/montavie/montavie.component';
import { Project } from '../_models/base-project.component';
import { RainydayloverComponent } from '../projects/rainydaylover/rainydaylover.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  @ViewChild('dropdown') dropdown!: ElementRef;

  projects: Project[] = allProjects
  selectedProject = 'All Projects'

  constructor(private router: Router, private route: ActivatedRoute, 
    private renderer: Renderer2, public dialog: Dialog) {
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

  openProjectDialog(project: Project) {
    this.dialog.open<string>(project.component);
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

const allProjects : Project[] = [
  new Project("2022 Google Internship",
              "Worked on a high impact project within the Fuchsia Graphics team to develop a new API and a demo for screen recording within the OS using C++.",
              "../../assets/2022swe.jpg",
              new Set(["internships", "featured"]),
              GoogleInternship2022Component),
  new Project("2021 Google Internship",
              "Worked alongside Google Cloud Compute FE team to migrate existing pages to Angular.",
              "../../assets/2021swe.png",
              new Set(["internships"]),
              GoogleInternship2021Component),
  new Project("2020 SWE Internship", 
              "Developed a full-stack portfolio website using Java Servlets, Datastore, and other Google APIs.",
              "../../assets/2020swe.jpg", 
              new Set(["internships"]), 
              GoogleInternship2020Component),
  new Project("Montavie",
              "Created a social media iOS application for sharing images and descriptions for my thru-hike on the AT.",
              "../../assets/montavie.png",
              new Set(["projects", "featured"]),
              MontavieComponent),
  new Project("RainyDayLover",
              "An iOS application",
              "../../assets/rainydaylover.png",
              new Set(["iOS", "projects"]),
              RainydayloverComponent),
]
