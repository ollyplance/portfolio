import { Component, OnInit } from '@angular/core';

import { BaseProject } from 'src/app/_models/base-project.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-rainydaylover',
  templateUrl: './rainydaylover.component.html',
  styleUrls: [
    '../../_models/base-project.component.scss',
    './rainydaylover.component.scss']
})
export class RainydayloverComponent extends BaseProject {

  constructor(dialogRef: DialogRef) { 
    super(dialogRef)
  }

}
