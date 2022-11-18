import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThmMenubarComponent } from './thm-menubar.component';

describe('ThmMenubarComponent', () => {
  let component: ThmMenubarComponent;
  let fixture: ComponentFixture<ThmMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThmMenubarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThmMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
