import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngotBaseComponent } from './ingot-base.component';
import {UIRouterModule} from "@uirouter/angular";

import { HomeModule } from "../home/home.module";
import {DashboardModule} from "../dashboard/dashboard.module";

import * as routes from "./ingot-base.routes";

@NgModule({
  declarations: [IngotBaseComponent],
  imports: [
      CommonModule,
      UIRouterModule.forChild({ states: [ routes.ingotBaseState ] }),

      HomeModule,
      DashboardModule
  ]
})
export class IngotBaseModule { }
