import { Component } from '@angular/core';
import {ListComponent} from "shared";

@Component({
  selector: 'app-home',
  styleUrls: ['./home.scss'],
  templateUrl: 'home.html'
})

export class HomeComponent extends ListComponent{

    constructor() {
      super();
    }
    
    ngOnInit() {

    }
}
