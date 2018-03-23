import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';
import { CaseSimulatorComponent } from './projects/case-simulator/case-simulator.component';
import { AllInComponent } from './projects/all-in/all-in.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PortfolioComponent },
      { path: 'case-simulator', component: CaseSimulatorComponent },
      { path: 'all-in', component: AllInComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
