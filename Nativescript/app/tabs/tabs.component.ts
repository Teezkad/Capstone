import {Component } from "@angular/core";
import { Page } from "ui/page"; // to hide action bar

class news{
  constructor(public id : string, public name: string){}
}

@Component({
  selector: "tabs",
  templateUrl: "./tabs/tabs.component.html",
})
export class tabsComponent {
  info: news[];
  constructor(){
    this.info= [
      {
        id: 'Random',
        name: 'Nuts'
      }
    ]
  }
}