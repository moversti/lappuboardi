import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardiComponent } from './boardi.component';

describe('BoardiComponent', () => {
  let component: BoardiComponent;
  let fixture: ComponentFixture<BoardiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
