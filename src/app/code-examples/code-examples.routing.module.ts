import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeExamplesComponent } from './code-examples.component';
import { MazeSolverComponent } from './projects/maze-solver/maze-solver.component';
import { DynamicFormComponent } from './projects/dynamic-form/dynamic-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CodeExamplesComponent },
      { path: 'maze-solver', component: MazeSolverComponent },
      { path: 'dynamic-form', component: DynamicFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeExamplesRoutingModule { }
