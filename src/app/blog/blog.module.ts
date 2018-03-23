import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BlogComponent } from './blog.component';
import { WebsiteFinishedComponent } from './posts/website-finished/website-finished.component';
import { CodeExamplesComponent } from './posts/code-examples/code-examples.component';

import { BlogRoutingModule } from './blog.routing.module';


@NgModule({
  declarations: [
    BlogComponent,
    WebsiteFinishedComponent,
    CodeExamplesComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BlogRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: []
})
export class BlogModule { }
