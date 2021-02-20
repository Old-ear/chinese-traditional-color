import { Component, OnInit } from '@angular/core';

/**
 * 欢迎页组件
 * @author wks 
 */
@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
    public selectedValue: string = '';
    constructor() { }

    /**
     * ngOnInit
     */
    public ngOnInit(): void {
    }

}
