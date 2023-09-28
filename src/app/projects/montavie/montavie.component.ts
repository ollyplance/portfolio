import { Component, OnInit } from '@angular/core';

import { BaseProject } from 'src/app/_models/base-project.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-montavie',
  templateUrl: './montavie.component.html',
  styleUrls: [
    '../../_models/base-project.component.scss',
    './montavie.component.scss',
  ],
})
export class MontavieComponent extends BaseProject {
  constructor(dialogRef: DialogRef) {
    super(dialogRef);
  }
}
