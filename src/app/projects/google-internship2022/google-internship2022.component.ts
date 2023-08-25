import { BaseProject } from 'src/app/_models/base-project.component';
import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-google-internship2022',
  templateUrl: './google-internship2022.component.html',
  styleUrls: [
    '../../_models/base-project.component.scss',
    './google-internship2022.component.scss']
})
export class GoogleInternship2022Component extends BaseProject {

  constructor(dialogRef: DialogRef) {
    super(dialogRef)
  }

}
