import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {Page1} from '../pages/page1/page1';
import {Page2} from '../pages/page2/page2';
import {SharedModule} from "./shared/shared.module";
import {DataService} from "./shared/services/data.service";
import {Picnic} from "../pages/picnic/picnic";
import {Panchine} from "../pages/panchine/panchine";
import {Fontane} from "../pages/fontante/fontane";

@NgModule({
    declarations: [
        MyApp,
        Page1,
        Page2,
        Picnic,
        Panchine,
        Fontane
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        SharedModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Page1,
        Page2,
        Picnic,
        Panchine,
        Fontane
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataService]
})
export class AppModule {
}
