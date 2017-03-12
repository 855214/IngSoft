/**
 * Created by nicola on 12/03/17.
 */
import {Injectable} from '@angular/core';
// if you've gone with the local installation approach, you'd use the following:
import firebase from 'firebase';

@Injectable()
export class DataService {
    public db: any;
    constructor() {
    }
    init() {
        const fbConf = {
            apiKey: "AIzaSyBY73111A7Meex5Z6RN7kQg1iTybH0FYOA",
            authDomain: "ingsoft-45e80.firebaseapp.com",
            databaseURL: "https://ingsoft-45e80.firebaseio.com",
            storageBucket: "ingsoft-45e80.appspot.com"
        };
        firebase.initializeApp(fbConf);
        this.db = firebase.database().ref('/');

    }
}