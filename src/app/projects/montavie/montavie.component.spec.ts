import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontavieComponent } from './montavie.component';

describe('MontavieComponent', () => {
  let component: MontavieComponent;
  let fixture: ComponentFixture<MontavieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontavieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontavieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
