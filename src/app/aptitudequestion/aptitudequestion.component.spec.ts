import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudequestionComponent } from './aptitudequestion.component';

describe('AptitudequestionComponent', () => {
  let component: AptitudequestionComponent;
  let fixture: ComponentFixture<AptitudequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudequestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
