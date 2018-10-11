import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RunnerProjetV1SharedModule} from 'app/shared';
import {HOME_ROUTE, HomeComponent} from './';

@NgModule({
    imports: [RunnerProjetV1SharedModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RunnerProjetV1HomeModule {
}
