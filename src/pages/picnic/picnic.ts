import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../app/shared/services/data.service";

@Component({
  selector: 'page-picnic',
  templateUrl: 'picnic.html',
})
export class Picnic {
  selectedItem: any;
  puntiInteresse:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private data: DataService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }
  ionViewWillEnter(){
    this.data.db.child('/puntiInteresse').orderByChild("type").equalTo("picnic").on('value', data => {
      //Needed since firebase is returning an object and not an array
      let retObj=data.val();
      this.puntiInteresse=(Object.keys(retObj).map(key => retObj[key])
      );
      console.log(this.puntiInteresse);
    });
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Picnic, {
      item: item
    });
  }
}
