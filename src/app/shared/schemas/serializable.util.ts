import "rxjs/add/operator/map";

/**
 * This super class is used to populate schemas from json
 * example i get a json from api and i want to instanciate one of the schemas in this folder with that json datas
 * **/
export class Serializable {
    fillFromObject(jsonObj: Object) {
        // var jsonObj = JSON.parse(json);

        /**IMPORTANT: fill the current object only with props that are defined (and not external coming from jsonObj)**/
        try {
            for (let propName in this) {
                if (this.hasOwnProperty(propName) && jsonObj.hasOwnProperty(propName))
                    this[propName] = jsonObj[propName]
            }
        } catch (e) {
            //TODO:
        }

    }
}
