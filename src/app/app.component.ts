import { Component } from '@angular/core';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd/i18n';
import { TranslateService } from '@ngx-translate/core';
/**
 * APP主组件
 * @author wks
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    constructor(private i18n: NzI18nService, private translate: TranslateService) { }
    /**
     * menu是否展开
     */
    public isCollapsed: boolean = false;

    /**
     * menu是否展开
     */
    public switchLanguage(): void {
        if (this.translate.defaultLang === 'zh_CN') {
            this.i18n.setLocale(en_US);
            this.translate.use('en_US');
            this.translate.defaultLang = 'en_US';
        } else {
            this.i18n.setLocale(zh_CN);
            this.translate.use('zh_CN');
            this.translate.defaultLang = 'zh_CN';
        }
    }
}
