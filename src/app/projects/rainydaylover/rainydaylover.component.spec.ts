import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainydayloverComponent } from './rainydaylover.component';

describe('RainydayloverComponent', () => {
  let component: RainydayloverComponent;
  let fixture: ComponentFixture<RainydayloverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainydayloverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainydayloverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
