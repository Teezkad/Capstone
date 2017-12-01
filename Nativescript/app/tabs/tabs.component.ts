import {Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Page } from "ui/page"; // to hide action bar
import * as listViewModule from "tns-core-modules/ui/list-view";
import * as ImageModule from "tns-core-modules/ui/image";
import { Image } from "tns-core-modules/ui/image";
import { OnInit } from '@angular/core';



export class news{
  constructor(
    public id: number,
    public Topic : String, 
    public author: string, 
    public pic: string, 
    public prev: String,
    public body: String ){}
}


@Component({
  selector: "tabs",
  templateUrl: "./tabs/tabs.component.html",
  styleUrls: ['./tabs/tabs.component.css']
})
export class tabsComponent implements OnInit{
  info: news[];
  constructor(){
    this.info= [
      {id: 0,
      Topic: 'Random News about Nothing',
      author: 'James Lock', 
      pic: "~/LilBill.png", 
      prev: "This is the preview to nothing ...",
      body: "This si the preview to nothing and i have nothing else to say" },
      {id: 1,
      Topic: 'Random News about Sopmething',
      author: 'Yank Mike Rotch', 
      pic: "~/LilBill.png", 
      prev: "This is the preview to Something ...",
      body: "This si the preview to nothing and i have nothing else to say" },
      {id: 2,
      Topic: 'Random News about Everything',
      author: 'Yank Mike Rotch', 
      pic: "~/LilBill.png", 
      prev: "This is the preview to everything ...",
      body: "This si the preview to nothing and i have nothing else to say" },
    ]
  }
  selectedInfo: news;
    ngOnInit() {
    }
  
    onSelect(item: news): void {
      this.selectedInfo = item;
    }
  }

