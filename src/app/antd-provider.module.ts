import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';

const modules: NzLayoutModule[] = [NzLayoutModule, NzMenuModule, NzButtonModule, NzGridModule, 
    NzSelectModule];

/**
 * antd引入模块
 * @author wks
 */
@NgModule({
  imports: [modules],
  exports: [modules]
})
export class AntdProviderModule {
}
