import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSimulatorComponent } from './case-simulator.component';

describe('CaseSimulatorComponent', () => {
  let component: CaseSimulatorComponent;
  let fixture: ComponentFixture<CaseSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
