import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThmHeaderComponent } from './thm-header.component';

describe('ThmHeaderComponent', () => {
  let component: ThmHeaderComponent;
  let fixture: ComponentFixture<ThmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThmHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
