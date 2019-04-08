import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {UIRouterModule} from "@uirouter/angular";
import {homeRoutes} from "./home.routes";

@NgModule({
  declarations: [HomeComponent],
  imports: [
      CommonModule,
      UIRouterModule.forChild({ states: homeRoutes }),
  ]
})
export class HomeModule { }
