import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DndModule } from 'ng2-dnd';

import { CodeExamplesComponent } from './code-examples.component';
import { MazeSolverComponent } from './projects/maze-solver/maze-solver.component';
import { DynamicFormComponent } from './projects/dynamic-form/dynamic-form.component';
import { DynamicSectionsComponent, TextSectionComponent, ImageSectionComponent, InputSectionComponent } from './projects/dynamic-form/dynamic-sections.component';


import { CodeExamplesRoutingModule } from './code-examples.routing.module';


@NgModule({
  declarations: [
    CodeExamplesComponent,
    MazeSolverComponent,
    DynamicFormComponent,
    DynamicSectionsComponent,
    TextSectionComponent,
    ImageSectionComponent,
    InputSectionComponent
  ],
  entryComponents: [
    TextSectionComponent,
    ImageSectionComponent,
    InputSectionComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    CodeExamplesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    DndModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: []
})
export class CodeExamplesModule { }
