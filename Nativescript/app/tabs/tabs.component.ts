import {Component } from "@angular/core";
import { Page } from "ui/page"; // to hide action bar
<<<<<<< HEAD

class news{
  constructor(public id : string, public name: string){}
}
=======
import * as listViewModule from "tns-core-modules/ui/list-view";


>>>>>>> tundefork/master

@Component({
  selector: "tabs",
  templateUrl: "./tabs/tabs.component.html",
<<<<<<< HEAD
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
=======
  
  
})
export class tabsComponent {
>>>>>>> tundefork/master
}