import {NgModule} from '@angular/core';

import {JhiAlertComponent, JhiAlertErrorComponent, RunnerProjetV1SharedLibsModule} from './';

@NgModule({
    imports: [RunnerProjetV1SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RunnerProjetV1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RunnerProjetV1SharedCommonModule {
}
