import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../app/shared/services/data.service";

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2 {
  selectedItem: any;
  puntiInteresse:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private data: DataService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }
  ionViewWillEnter(){
    this.data.db.child('/puntiInteresse').orderByChild("type").equalTo("panchine").on('value', data => {
      //Needed since firebase is returning an object and not an array
      let retObj=data.val();
      this.puntiInteresse=(Object.keys(retObj).map(key => retObj[key])
      );
      console.log(this.puntiInteresse);
    });
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      item: item
    });
  }
}
