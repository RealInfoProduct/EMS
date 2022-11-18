import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusAttendanceComponent } from './bonus-attendance.component';

describe('BonusAttendanceComponent', () => {
  let component: BonusAttendanceComponent;
  let fixture: ComponentFixture<BonusAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
