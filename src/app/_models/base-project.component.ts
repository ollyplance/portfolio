import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-project',
  template: 'No common template'
})
export class BaseProject implements OnInit {
  title!: string;
  description!: string;
  imageLocation!: string;
  routerLink!: string;
  hashtags!: Set<string>;

  constructor() {}

  ngOnInit() {
  }
}