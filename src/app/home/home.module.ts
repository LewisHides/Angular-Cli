import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {UIRouterModule} from "@uirouter/angular";
import * as routes from "./home.routes";

@NgModule({
  declarations: [HomeComponent],
  imports: [
      CommonModule,
      UIRouterModule.forChild({ states: [ routes.ingotHomeState ] }),
  ]
})
export class HomeModule { }
