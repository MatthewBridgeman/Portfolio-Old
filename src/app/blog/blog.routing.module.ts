import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { WebsiteFinishedComponent } from './posts/website-finished/website-finished.component';
import { CodeExamplesComponent } from './posts/code-examples/code-examples.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: BlogComponent },
      { path: 'website-finished', component: WebsiteFinishedComponent },
      { path: 'code-examples', component: CodeExamplesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
