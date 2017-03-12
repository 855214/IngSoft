/**
 * Created by nicola on 12/03/17.
 */
import {NgModule, ModuleWithProviders} from '@angular/core';
import {DataService} from "./services/data.service";

const MODULES = [
    // Do NOT include UniversalModule, HttpModule, or JsonpModule here
];

const PIPES = [
    // put pipes here
];

const COMPONENTS = [
    // put shared components here
];

const PROVIDERS = [
        DataService
    ];

@NgModule({
    imports: [
        ...MODULES
    ],
    declarations: [
        ...PIPES,
        ...COMPONENTS
    ],
    exports: [
        ...MODULES,
        ...PIPES,
        ...COMPONENTS
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ...PROVIDERS
            ]
        };
    }
}
