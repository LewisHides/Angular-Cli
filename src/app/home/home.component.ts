/**
 * Home Component
 *
 * Component to route a user to their relevant Home Route
 */
import { Component, OnInit } from '@angular/core';
import { UIRouterModule, StateService } from "@uirouter/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

/**
 * Home Component
 *
 * The HomeComponent decides where to send a user as their 'home'
 */
export class HomeComponent implements OnInit {

    constructor(private stateService: StateService) { }

    redirectUserToHome(){
        this.stateService.go('ingot.dashboard');
    }

    ngOnInit() {
        console.log('HOME COMPONENT LOADED');
        this.redirectUserToHome();
    }

}
