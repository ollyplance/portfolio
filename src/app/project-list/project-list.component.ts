import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
  @ViewChild('typeDropdown') typeDropdown!: ElementRef;
  @ViewChild('fromDropdown') fromDropdown!: ElementRef;
  @ViewChild('byDropdown') byDropdown!: ElementRef;

  DropdownType = DropdownType
  projects: Project[] = allProjects

  type = 'featured'
  from = 'everything'
  sortedBy = 'newest'
  selectTypes : string[] = ['featured', 'everything', 'projects & experiences', 'writing', 'physical challenges']
  fromTypes : string[] = ['everything', 'internships', 'CMU', 'personal life']
  byTypes : string[] = ['newest', 'oldest']
  

  constructor(private router: Router, private route: ActivatedRoute, public dialog: Dialog) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        if (params['id']) {
          this.openProjectDialog(params['id'])
        }
      })
    this.route.queryParams
      .subscribe(params => {
        if (params['type']) {
          this.changeDropdown(DropdownType.type, params['type'])
        }
        if (params['from']) {
          this.changeDropdown(DropdownType.from, params['from'])
        }
        if (params['by']) {
          this.changeDropdown(DropdownType.by, params['by'])
        }
        this.filterDropdown()
      })
  }

  toggleDropdown(dt: DropdownType) {
    if (dt === DropdownType.type) {
      this.typeDropdown.nativeElement.classList.toggle("active")
      this.fromDropdown.nativeElement.classList.remove("active")
      this.byDropdown.nativeElement.classList.remove("active")
    } else if (dt === DropdownType.from) {
      this.fromDropdown.nativeElement.classList.toggle("active")
      this.typeDropdown.nativeElement.classList.remove("active")
      this.byDropdown.nativeElement.classList.remove("active")
    } else {
      this.byDropdown.nativeElement.classList.toggle("active")
      this.typeDropdown.nativeElement.classList.remove("active")
      this.fromDropdown.nativeElement.classList.remove("active")
    }
  }

  selectDropdown(dt: DropdownType, selection: string) {
    this.changeDropdown(dt, selection)
    this.router.navigate([], { relativeTo: this.route, queryParams: {type: this.type, from: this.from, by: this.sortedBy}, queryParamsHandling: 'merge'})
  }

  changeDropdown(dt: DropdownType, selection: string) {
    if (dt === DropdownType.type) {
      this.type = selection
    } else if (dt === DropdownType.from) {
      this.from = selection
    } else {
      this.sortedBy = selection
    }
  }

  filterDropdown() {
    var filtered = allProjects
    if (this.type != "everything") {
      filtered = allProjects.filter(project => project.hashtags.has(this.type))
    }
    if (this.from != "everything") {
      filtered = filtered.filter(project => project.hashtags.has(this.from))
    }
    this.projects = filtered
  }

  navigateProject(project: Project) {
    if (project.urlPath) {
      this.router.navigate([project.urlPath], { relativeTo: this.route })
    } else if (project.individualLink) {
      window.open(project.individualLink, '_blank');
    }
  }

  openProjectDialog(urlPath?: string, project?: Project) {
    if (!project && urlPath!) {
      project = allProjects.find(project => project.urlPath == urlPath);
    }
    if (project && project.component) {
      let dialogRef = this.dialog.open<string>(project.component);
      dialogRef.closed.subscribe(result => {
        this.dialog.closeAll();
        this.router.navigate(['portfolio'])
      });
    }
  }
}

enum DropdownType {
  type,
  from,
  by
}

const allProjects : Project[] = [
  new Project("SWE Internship · Google",
              "Worked on a high impact project within the Fuchsia Graphics team to develop a new API and a demo for screen recording within the OS using C++.",
              "../../assets/images/2022swe.png",
              new Set(["featured", "projects & experiences", "internships"]),
              [
                ["Code", "https://cs.opensource.google/fuchsia/fuchsia/+/main:src/ui/scenic/lib/screen_capture2/"], 
                ["Demo", "https://cs.opensource.google/fuchsia/fuchsia/+/main:src/ui/examples/screen_recording/"], 
                ["Documentation", "https://fuchsia.dev/fuchsia-src/concepts/ui/scenic/screen_capture"]
              ],
              "https://fuchsia.dev/"),

  new Project("SWE Internship · Google",
              "Worked alongside Google Cloud Compute FE team to migrate Cloud Compute Reservation page to Angular. The migration was rolled out to over 2000 monthly users.",
              "../../assets/images/2021swe.png",
              new Set(["projects & experiences", "internships"]),
              [["Page", "https://console.cloud.google.com/compute/reservations"]],
              "https://cloud.google.com/compute/docs/instances/reservations-overview"),

  new Project("STEP Internship · Google", 
              "Worked with Angular to develop a full-stack website using Firebase with a team of 3. Implemented user authentication, profiles, data/image uploading, full-text search, and dynamic information.",
              "../../assets/images/2020swe.jpg", 
              new Set(["projects & experiences", "internships"]),
              [],
              "https://github.com/googleinterns/step79-2020"),

  new Project("Montavie",
              "Created a social media iOS application for sharing images and descriptions for my thru-hike on the AT.",
              "../../assets/images/montavie.png",
              new Set(["featured", "projects & experiences", "personal life"]),
              [["App Store", "https://apps.apple.com/us/app/montavie/id1671634416"],
               ["Code", "https://github.com/ollyplance/montavie-ios"]],
              "https://ollyplance.github.io/montavie-ios/"),

  new Project("RainyDayLover",
              "An iOS application",
              "../../assets/images/rainydaylover.png",
              new Set(["projects & experiences", "personal life"]),
              [["Code", "https://github.com/ollyplance/rainydaylover"]],
              "https://ollyplance.github.io/rainydaylover/"),

  new Project("Earth-It",
              "An Online Multiplayer 2D Sandbox game, similar to Terraria or Minecraft - built in 15112",
              "../../assets/images/earthpixelart.png",
              new Set(["projects & experiences", "CMU"]),
              [],
              "https://github.com/ollyplance"),

  // new Project("Web Development Projects",
  //           ` 1. Prototyped, launched, and developed 2 full-stack web projects \n
  //             2. Designed relational database and created application with MVC structure and 100% unit test code coverage. \n
  //             3. Experiemented with Angular forms and drag-and-drop. \n
  //           `,
  //           "../../assets/rainydaylover.png",
  //           new Set(["projects & experiences", "personal life", "CMU"]),
  //           [["Form Exp.", "https://github.com/ollyplance/angular-form-experimentation"]],
  //           ""),

  new Project("Non-profit Consulting Project",
            "Worked with One To World to fix their data pipeline. They were unable to access old customer data due to a migration they had done internally. Recognized the problems and created a solution to extract and help them manage the data in the future.",
            "../../assets/images/onetoworldlogo.jpeg",
            new Set(["featured", "projects & experiences", "CMU"]),
            [],
            "https://onetoworld.org/"),

  new Project("Game Design",
            'Developed several games in 53-471 (Game Design, Prototyping, and Production). This class focused on "rapid prototyping and iterative design, and common methods of project management for creative software development."',
            "../../assets/images/rainydaylover.png",
            new Set(["featured", "projects & experiences", "CMU"]),
            [],
            "https://ollyplance.github.io/game-development/"),

  // new Project("Poetry",
  //           "",
  //           "../../assets/rainydaylover.png",
  //           new Set(["writing", "CMU"]),
  //           [],
  //           undefined,
  //           RainydayloverComponent,
  //           "rainydaylover"),
            
  new Project("Kiosk HCI Project",
            "Build out Figma designs of bus kiosk by researching and prototyping designs to make travel more efficient. ",
            "../../assets/images/rainydaylover.png",
            new Set(["projects & experiences", "CMU"]),
            [],
            "https://www.figma.com/proto/ipfpK7x6fNa1Bu3IYAC2rO/Hi-Fidelity-Prototype?type=design&scaling=scale-down&node-id=20-129&starting-point-node-id=20%3A129"), 
]
