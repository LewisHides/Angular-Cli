import {Component, OnInit} from '@angular/core';
import {AppConfig} from "../core/config/app-config.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    constructor(private config: AppConfig) {
    }

    ngOnInit() {
        var settings = this.config.get();
    }

}
