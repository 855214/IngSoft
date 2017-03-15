import {Component} from "@angular/core";
import {Platform, NavParams, ViewController} from 'ionic-angular';

import {FiltersService} from "../../services/filters.service";
import {Filters} from "../../schemas/filters.schemas";
/**
 * Created by nicola on 13/03/17.
 */

@Component({
    templateUrl: './filters.component.html',
    selector: 'filters-comp'
})
export class FiltersComponent {
    private filters: Filters = new Filters();

    constructor(public platform: Platform,
                public params: NavParams,
                public viewCtrl: ViewController,
                private fserv: FiltersService) {
        this.init();
    }
    init(){
        this.fserv.getFilters().subscribe(f=>{
            this.filters=f;
        });
    }
    toggleType(e,type){
        if(e.checked){
            this.filters.addType(type);
        }else{
            this.filters.removeType(type);
        }
        console.log(this.filters);
    }
    updateChanges(){
        console.log(this.filters);
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

}