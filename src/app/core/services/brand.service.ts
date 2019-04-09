import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

    type = 'default';
    public = false;
    theme = null;
    party = {};
    name = null;
    logo = null;
    title = null;
    //config = config;

    constructor() {

    }

    doTest(){
      //console.log(this.config);
        
    }
}
