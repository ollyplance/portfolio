import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleInternship2020Component } from './google-internship2020.component';

describe('GoogleInternship2020Component', () => {
  let component: GoogleInternship2020Component;
  let fixture: ComponentFixture<GoogleInternship2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleInternship2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleInternship2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
