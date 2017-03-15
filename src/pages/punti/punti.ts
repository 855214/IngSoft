import {Component} from '@angular/core';

import {NavController, NavParams, ModalController} from 'ionic-angular';
import {DataService} from "../../app/shared/services/data.service";
import {FiltersComponent} from "../../app/shared/components/filters/filters.component";
import {Filters} from "../../app/shared/schemas/filters.schemas";
import {FiltersService} from "../../app/shared/services/filters.service";

@Component({
    selector: 'page-punti',
    templateUrl: 'punti.html',
})
export class Punti {

    puntiInteresse: any[] = [];
    filters:Filters=new Filters();
    constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataService, private modalCtrl: ModalController,private fserv: FiltersService) {
        // If we navigated to this page, we will have an item available as a nav param
        this.init();
    }
    init(){
        this.fserv.getFilters().subscribe(f=>{
            this.filters=f;
        });
    }
    ionViewWillEnter() {
        /*if (false)
            this.data.db.child('/puntiInteresse').orderByChild("type").equalTo("").on('value', data => {
                //Needed since firebase is returning an object and not an array
                let retObj = data.val();
                this.puntiInteresse = (Object.keys(retObj).map(key => retObj[key])
                );
            });
        else {*/
            this.data.db.child('/puntiInteresse').on('value', data => {
                //Needed since firebase is returning an object and not an array
                this.puntiInteresse = data.val();
            });
        //}
    }
    updateResults(){
        this.puntiInteresse=[];
        for(let t of this.filters.types){
            this.data.db.child('/puntiInteresse').orderByChild("type").equalTo(t).on('value', data => {
                //Needed since firebase is returning an object and not an array
                let retObj = data.val();
                this.puntiInteresse = [...this.puntiInteresse,...(Object.keys(retObj).map(key => retObj[key]))];
            });
        }
    }

    itemTapped(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(Punti, {
            item: item
        });
    }

    showFilters() {
        let profileModal = this.modalCtrl.create(FiltersComponent, {userId: 8675309});
        profileModal.present();
        profileModal.onDidDismiss(()=>{
            this.updateResults();

        })

    }
}
