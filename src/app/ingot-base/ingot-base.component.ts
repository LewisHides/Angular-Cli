import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingot-base',
  templateUrl: './ingot-base.component.html',
  styleUrls: ['./ingot-base.component.scss']
})
export class IngotBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('BASE COMPONENT LOADED');
  }

}
