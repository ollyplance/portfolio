import { Component, OnInit, Type } from '@angular/core';

import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-base-project',
  template: 'No common template',
  styleUrls: ['./base-project.component.scss'],
})
export class BaseProject {
  constructor(public dialogRef: DialogRef) {}

  closeProjectDialog() {
    this.dialogRef.close();
  }
}

export class Project {
  title!: string;
  description!: string;
  imageLocation!: string;
  hashtags!: Set<string>;
  component: Type<BaseProject>;
  urlPath!: string;

  constructor(title: string, description: string, imageLocation: string, 
      hashtags: Set<string>, component: Type<BaseProject>, urlPath: string) {
    this.title = title;
    this.description = description;
    this.imageLocation = imageLocation;
    this.hashtags = hashtags;
    this.component = component;
    this.urlPath = urlPath;
  }
}