import { Component, OnInit } from '@angular/core';
import { BrandService } from "../../../core/services/brand.service";

@Component({
    selector: 'app-brand-logo',
    templateUrl: './brand-logo.component.html',
    styleUrls: ['./brand-logo.component.scss'],
    providers: [BrandService]
})
export class BrandLogoComponent implements OnInit {

    constructor(public brandService: BrandService) { }

    ngOnInit() {
        this.brandService.doTest();
    }

}
