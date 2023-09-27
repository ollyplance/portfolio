import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { Dialog } from '@angular/cdk/dialog';
import { Project } from '../_models/base-project.component';
import { allProjects } from '../_data/projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  @ViewChild('typeDropdown') typeDropdown!: ElementRef;
  @ViewChild('fromDropdown') fromDropdown!: ElementRef;
  @ViewChild('byDropdown') byDropdown!: ElementRef;
  @ViewChild('typeButton') typeButton!: ElementRef;
  @ViewChild('fromButton') fromButton!: ElementRef;
  @ViewChild('byButton') byButton!: ElementRef;

  DropdownType = DropdownType
  projects: Project[] = allProjects

  type = 'featured'
  from = 'everything'
  sortedBy = 'newest'
  selectTypes : string[] = ['featured', 'everything', 'projects & experiences', 'writing', 'physical challenges']
  fromTypes : string[] = ['everything', 'internships', 'CMU', 'personal life']
  byTypes : string[] = ['newest', 'oldest']
  

  constructor(private router: Router, private route: ActivatedRoute, public dialog: Dialog, private renderer: Renderer2) {
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

  ngAfterViewInit() {
    this.renderer.listen('window', 'click',(e:Event)=>{
      if (!this.typeButton.nativeElement.contains(e.target) && !this.fromButton.nativeElement.contains(e.target) && !this.byButton.nativeElement.contains(e.target)) {
        this.closeAllDropdowns()
      }
    });
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

  closeAllDropdowns() {
    this.typeDropdown.nativeElement.classList.remove("active")
    this.fromDropdown.nativeElement.classList.remove("active")
    this.byDropdown.nativeElement.classList.remove("active")
  }

  selectDropdown(dt: DropdownType, selection: string) {
    this.changeDropdown(dt, selection)
    this.router.navigate([], { relativeTo: this.route, queryParams: {type: this.type, from: this.from, by: this.sortedBy}, queryParamsHandling: 'merge'})
    this.toggleDropdown(dt)
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
    if (this.type !== "everything") {
      filtered = allProjects.filter(project => project.hashtags.has(this.type))
    }
    if (this.from !== "everything") {
      filtered = filtered.filter(project => project.hashtags.has(this.from))
    }
    this.projects = filtered.sort((a, b) => {
      // if the date is current/present
      if (a == undefined && b == undefined) {
        return 0
      } else if (a == undefined) {
        return -1
      } else if (b == undefined) {
        return 1
      }

      if (a.dates[1].getTime() < b.dates[1].getTime()) {
        return this.sortedBy === "newest" ? 1 : -1
      } else if (a.dates[1].getTime() > b.dates[1].getTime()) {
        return this.sortedBy === "newest" ? -1 : 1
      } else {
        return 0
      }
    })
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
