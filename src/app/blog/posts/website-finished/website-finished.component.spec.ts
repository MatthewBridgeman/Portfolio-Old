import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteFinishedComponent } from './website-finished.component';

describe('WebsiteFinishedComponent', () => {
  let component: WebsiteFinishedComponent;
  let fixture: ComponentFixture<WebsiteFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
