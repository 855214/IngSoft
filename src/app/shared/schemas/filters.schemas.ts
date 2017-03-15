import {Serializable} from "./serializable.util";
/**
 * Created by nicola on 15/03/17.
 */

const AVAILABLE_TYPES = ["panchine", "picnic", "fontane"];
export class Filters extends Serializable {

    private s_types: string[] = [];
    private s_coordX: number = 0;
    private s_coordY: number = 0;

    constructor()
    constructor(public userid: number = 0,) {
        super();
    }

    get availabletypes() {
        return AVAILABLE_TYPES;
    }

    contains(t: string) {
        console.log("searching "+t+" inside "+this.s_types);
        return this.s_types.indexOf(t)>=0;
    }

    addType(t: string) {
        if (this.s_types.indexOf(t) < 0) {
            this.s_types.push(t);
        }
    }

    removeType(t: string) {
        let ind = this.s_types.indexOf(t);
        if (ind >= 0) {
            this.s_types.splice(ind,1);
        }
    }

    set types(t) {
        if (t instanceof Array) {
            for (let newt of t) {
                this.addType(newt);//only add if not present
            }
        } else {
            this.addType(t);
        }
    }

    get types() {
        return this.s_types;
    }
    getSelectedTypes(){
        if(this.s_types.length>0){
            return this.s_types;
        }else{
            return AVAILABLE_TYPES;
        }
    }

    set coordX(x: any) {
        this.s_coordX = parseFloat(x);
    }

    get coordX() {
        return this.s_coordX;
    }

    set coordY(x: any) {
        this.s_coordY = parseFloat(x);
    }

    get coordY() {
        return this.s_coordY;
    }
}

export class Orders extends Serializable {

    constructor()
    constructor(public userid: number = 0,) {
        super();
    }
}