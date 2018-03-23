import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CodeExamplesComponent } from './code-examples.component';
import { MazeSolverComponent } from './projects/maze-solver/maze-solver.component';
import { DynamicFormComponent } from './projects/dynamic-form/dynamic-form.component';

import { CodeExamplesRoutingModule } from './code-examples.routing.module';


@NgModule({
  declarations: [
    CodeExamplesComponent,
    MazeSolverComponent,
    DynamicFormComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    CodeExamplesRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: []
})
export class CodeExamplesModule { }
