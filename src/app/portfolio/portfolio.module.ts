import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { PortfolioComponent } from './portfolio.component';
import { CaseSimulatorComponent } from './projects/case-simulator/case-simulator.component';
import { AllInComponent } from './projects/all-in/all-in.component';

import { PortfolioRoutingModule } from './portfolio.routing.module';


@NgModule({
  declarations: [
    PortfolioComponent,
    CaseSimulatorComponent,
    AllInComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    PortfolioRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: []
})
export class PortfolioModule { }
