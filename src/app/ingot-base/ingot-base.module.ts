import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngotBaseComponent } from './ingot-base.component';
import {UIRouterModule} from "@uirouter/angular";

import { HomeModule } from "../home/home.module";
import {DashboardModule} from "../dashboard/dashboard.module";

import { ingotBaseRoutes } from "./ingot-base.routes";

import { NavbarComponent } from './navbar/navbar.component';
import { BrandLogoComponent } from './navbar/brand-logo/brand-logo.component';

@NgModule({
  declarations: [IngotBaseComponent, NavbarComponent, BrandLogoComponent],
  imports: [
      CommonModule,
      UIRouterModule.forChild({ states: ingotBaseRoutes }),

      HomeModule,
      DashboardModule
  ]
})
export class IngotBaseModule { }
