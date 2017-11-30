import {Component } from "@angular/core";
import { Page } from "ui/page"; // to hide action bar
import * as listViewModule from "tns-core-modules/ui/list-view";
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
      },
      {id: 'NEW NUT REMOVAL', name: 'DEEZ?!?!'}
    ]
  }
}