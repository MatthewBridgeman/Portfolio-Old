import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExamplesBlogComponent } from './code-examples-blog.component';

describe('CodeExamplesBlogComponent', () => {
  let component: CodeExamplesBlogComponent;
  let fixture: ComponentFixture<CodeExamplesBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExamplesBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExamplesBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
