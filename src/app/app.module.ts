import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { CaseSimulatorComponent } from './portfolio/projects/case-simulator/case-simulator.component';
import { AllInComponent } from './portfolio/projects/all-in/all-in.component';

import { CodeExamplesComponent } from './code-examples/code-examples.component';
import { MazeSolverComponent } from './code-examples/projects/maze-solver/maze-solver.component';
import { DynamicFormComponent } from './code-examples/projects/dynamic-form/dynamic-form.component';

import { BlogComponent } from './blog/blog.component';
import { WebsiteFinishedComponent } from './blog/posts/website-finished/website-finished.component';
import { CodeExamplesBlogComponent } from './blog/posts/code-examples-blog/code-examples-blog.component';

import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,

    PortfolioComponent,
    CaseSimulatorComponent,
    AllInComponent,

    BlogComponent,
    WebsiteFinishedComponent,
    CodeExamplesBlogComponent,

    CodeExamplesComponent,
    MazeSolverComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule.withServerTransition({appId: 'fire-blog'}),
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
