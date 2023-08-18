import { Component, OnInit } from '@angular/core';

import { BaseProject } from 'src/app/_models/base-project.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-google-internship2020',
  templateUrl: './google-internship2020.component.html',
  styleUrls: [
    '../../_models/base-project.component.scss',
    './google-internship2020.component.scss']
})
export class GoogleInternship2020Component extends BaseProject{

  constructor(dialogRef: DialogRef) { 
    super(dialogRef)
  }

}
