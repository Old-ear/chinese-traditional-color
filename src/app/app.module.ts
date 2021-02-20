import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/**
 * 配置 ng-zorro-antd 国际化
 */
import { Inject, LOCALE_ID } from '@angular/core';
import { en_US, NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { AntdProviderModule } from './antd-provider.module';
import { environment } from '../environments/environment';

// 引入TranslateModule模块
import {
    TranslateModule,
    TranslateLoader,
    TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * 配置i18n
 */
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * 配置i18n
 */
export function LocaleIdFactory(): string {
    return 'zh-CN';
}
registerLocaleData(en);
registerLocaleData(zh);

/**
 * APP主模块
 * @author wks
 */
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        IconsProviderModule,
        AntdProviderModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    providers: [{
        provide: NZ_I18N,
        useFactory: (localId: string) => {
            switch (localId) {
                case 'en':
                    return en_US;
                /**
                 *  与 angular.json i18n/locales 配置一致
                 */
                case 'zh':
                    return zh_CN;
                default:
                    return zh_CN;
            }
        },
        deps: [LOCALE_ID]
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private translate: TranslateService, @Inject(LOCALE_ID) locale: string) {
        if (environment.supportedLocale.indexOf(locale) === -1) {
          locale = 'zh_CN';
        }
        this.translate.use(locale);
      }
 }
