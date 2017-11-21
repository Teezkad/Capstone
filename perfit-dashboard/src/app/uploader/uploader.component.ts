import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { FormsModule} from '@angular/forms';

import { ItemService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})

export class UploaderComponent implements OnInit {
 
   user='';

  item: Item = {
  	title: '',
  	description: '',
  }

  constructor(private itemService: ItemService,private cookieService:CookieService) {
    this.user = this.cookieService.get('username'); 
  }

  ngOnInit() {
  }

  onSubmit(){
    if (this.item.title != '' && this.item.description != '') {
       this.itemService.addItem(this.item);
       this.item.title = ' ';
       this.item.description = ' ';
    }

  }


}
