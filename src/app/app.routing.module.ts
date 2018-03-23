import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { CaseSimulatorComponent } from './portfolio/projects/case-simulator/case-simulator.component';
import { AllInComponent } from './portfolio/projects/all-in/all-in.component';

import { CodeExamplesComponent } from './code-examples/code-examples.component';
import { MazeSolverComponent } from './code-examples/projects/maze-solver/maze-solver.component';
import { DynamicFormComponent } from './code-examples/projects/dynamic-form/dynamic-form.component';

import { BlogComponent } from './blog/blog.component';
import { WebsiteFinishedComponent } from './blog/posts/website-finished/website-finished.component';
import { CodeExamplesBlogComponent } from './blog/posts/code-examples-blog/code-examples-blog.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/case-simulator', component: CaseSimulatorComponent },
  { path: 'portfolio/all-in', component: AllInComponent },
  { path: 'code-examples', component: CodeExamplesComponent },
  { path: 'code-examples/maze-solver', component: MazeSolverComponent },
  { path: 'code-examples/dynamic-form', component: DynamicFormComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/website-finished', component: WebsiteFinishedComponent },
  { path: 'blog/code-examples', component: CodeExamplesBlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
