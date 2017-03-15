/**
 * Created by nicola on 12/03/17.
 */
import {Injectable} from '@angular/core';
import {Filters} from "../schemas/filters.schemas";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/of';
import {Observable} from "rxjs/Observable";

// if you've gone with the local installation approach, you'd use the following:

@Injectable()
export class FiltersService {
    private filters:Filters=new Filters();
    constructor(
    ) {
    }

    getFilters(){
        return Observable.of(this.filters);
    }
}