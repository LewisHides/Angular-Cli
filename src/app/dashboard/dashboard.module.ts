import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIRouterModule } from "@uirouter/angular";

import * as routes from "./dashboard.routes";

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
      CommonModule,
      UIRouterModule.forChild({ states: [ routes.dashboard ] }),
  ]
})
export class DashboardModule { }
