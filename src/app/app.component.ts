import { Component } from '@angular/core';
import {Restangular} from "ngx-restangular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Cli';
  party = {};
    constructor(private restangular: Restangular) {
    }



    ngOnInit() {
        this.restangular.one('parties', 171).get().subscribe(party =>
            
            {this.party = party;
                console.log('cats');}

        );
    }
}
