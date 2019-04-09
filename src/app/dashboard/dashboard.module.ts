import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIRouterModule } from "@uirouter/angular";

import {dashboardRoutes} from "./dashboard.routes";

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
      CommonModule,
      UIRouterModule.forChild({ states: dashboardRoutes })
  ]
})
export class DashboardModule { }
