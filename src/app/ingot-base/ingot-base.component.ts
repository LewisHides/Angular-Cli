import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-ingot-base',
    templateUrl: './ingot-base.component.html',
    styleUrls: ['../../assets/css/theme.css', '../../assets/css/admin-forms.css'],
    encapsulation: ViewEncapsulation.None
})
export class IngotBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('BASE COMPONENT LOADED');
  }

}
