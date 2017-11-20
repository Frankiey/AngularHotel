import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersOverviewComponent } from './workers-overview.component';

describe('WorkersOverviewComponent', () => {
  let component: WorkersOverviewComponent;
  let fixture: ComponentFixture<WorkersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
