import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardiFormComponent } from './boardi-form.component';

describe('BoardiFormComponent', () => {
  let component: BoardiFormComponent;
  let fixture: ComponentFixture<BoardiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
