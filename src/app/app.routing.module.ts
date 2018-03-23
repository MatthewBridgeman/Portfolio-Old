import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { CaseSimulatorComponent } from './portfolio/projects/case-simulator/case-simulator.component';
import { AllInComponent } from './portfolio/projects/all-in/all-in.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' },
  { path: 'code-examples', loadChildren: './code-examples/code-examples.module#CodeExamplesModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
