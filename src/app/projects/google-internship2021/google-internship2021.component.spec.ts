import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleInternship2021Component } from './google-internship2021.component';

describe('GoogleInternship2021Component', () => {
  let component: GoogleInternship2021Component;
  let fixture: ComponentFixture<GoogleInternship2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleInternship2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleInternship2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
