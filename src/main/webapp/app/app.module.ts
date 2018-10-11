import './vendor.ts';

import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {LocalStorageService, Ng2Webstorage, SessionStorageService} from 'ngx-webstorage';
import {JhiEventManager} from 'ng-jhipster';

import {AuthInterceptor} from './blocks/interceptor/auth.interceptor';
import {AuthExpiredInterceptor} from './blocks/interceptor/auth-expired.interceptor';
import {ErrorHandlerInterceptor} from './blocks/interceptor/errorhandler.interceptor';
import {NotificationInterceptor} from './blocks/interceptor/notification.interceptor';
import {RunnerProjetV1SharedModule} from 'app/shared';
import {RunnerProjetV1CoreModule} from 'app/core';
import {RunnerProjetV1AppRoutingModule} from './app-routing.module';
import {RunnerProjetV1HomeModule} from './home/home.module';
import {RunnerProjetV1AccountModule} from './account/account.module';
import {RunnerProjetV1EntityModule} from './entities/entity.module';
import * as moment from 'moment';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import {ErrorComponent, FooterComponent, JhiMainComponent, NavbarComponent, PageRibbonComponent} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        RunnerProjetV1AppRoutingModule,
        Ng2Webstorage.forRoot({prefix: 'jhi', separator: '-'}),
        RunnerProjetV1SharedModule,
        RunnerProjetV1CoreModule,
        RunnerProjetV1HomeModule,
        RunnerProjetV1AccountModule,
        RunnerProjetV1EntityModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [LocalStorageService, SessionStorageService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class RunnerProjetV1AppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = {year: moment().year() - 100, month: 1, day: 1};
    }
}
