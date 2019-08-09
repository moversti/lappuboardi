import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LappuComponent } from './lappu.component';

describe('LappuComponent', () => {
  let component: LappuComponent;
  let fixture: ComponentFixture<LappuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LappuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LappuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
