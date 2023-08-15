import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleInternship2022Component } from './google-internship2022.component';

describe('GoogleInternship2022Component', () => {
  let component: GoogleInternship2022Component;
  let fixture: ComponentFixture<GoogleInternship2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleInternship2022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleInternship2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
