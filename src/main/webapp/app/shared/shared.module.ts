import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';

import {NgbDateMomentAdapter} from './util/datepicker-adapter';
import {
    HasAnyAuthorityDirective,
    JhiLoginModalComponent,
    RunnerProjetV1SharedCommonModule,
    RunnerProjetV1SharedLibsModule
} from './';

@NgModule({
    imports: [RunnerProjetV1SharedLibsModule, RunnerProjetV1SharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{provide: NgbDateAdapter, useClass: NgbDateMomentAdapter}],
    entryComponents: [JhiLoginModalComponent],
    exports: [RunnerProjetV1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RunnerProjetV1SharedModule {
}
