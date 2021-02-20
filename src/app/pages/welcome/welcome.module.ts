import { NgModule } from '@angular/core';
import { AntdProviderModule } from '../../antd-provider.module';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

/**
 * 欢迎页模块
 * @author wks
 */
@NgModule({
    imports: [AntdProviderModule, WelcomeRoutingModule],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent]
})
export class WelcomeModule { }
