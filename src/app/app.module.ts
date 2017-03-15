import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {Page1} from '../pages/page1/page1';
import {Page2} from '../pages/page2/page2';
import {SharedModule} from "./shared/shared.module";
import {DataService} from "./shared/services/data.service";
import {Punti} from "../pages/punti/punti";
import {FiltersComponent} from "./shared/components/filters/filters.component";
import {FiltersService} from "./shared/services/filters.service";

@NgModule({
    declarations: [
        MyApp,
        Page1,
        Page2,
        Punti,
        FiltersComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        // SharedModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Page1,
        Page2,
        Punti,
        FiltersComponent
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataService,FiltersService]
})
export class AppModule {
}
