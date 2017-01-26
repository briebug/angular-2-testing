import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {TranslateModule} from 'ng2-translate/ng2-translate';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {CookieService} from 'angular2-cookie/services/cookies.service';

import {routing} from './app.routes';

import {AppComponent} from './app.component';
import {LoginModule} from './components/login/login.module';
import {SessionService} from './services';
import { MyComponentComponent } from './components/my-component/my-component.component';

@NgModule({
    declarations: [
        AppComponent,
        MyComponentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        TranslateModule.forRoot(),
        ToastModule,
        LoginModule
    ],
    providers: [
        CookieService,
        SessionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
