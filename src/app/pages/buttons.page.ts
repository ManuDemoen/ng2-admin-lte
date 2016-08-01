import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { BUTTONS_DIRECTIVES } from '../../components/buttons/index';
import { BackgroundColors } from '../../components/common/index';

@Component({
    moduleId: module.id,
    selector: 'buttons-page',
    templateUrl: './buttons.page.html',
    directives: [ ROUTER_DIRECTIVES, BUTTONS_DIRECTIVES ]
})
export class ButtonsPage implements OnInit {
    bgColors: string[] = BackgroundColors;
    dropdownEvents: string[] = [];

    constructor() { }

    ngOnInit() { }

    clicked($event: any) {
        console.info('Clicked: ', $event);
    }

    dropdownToggled(name: string, isOpen: boolean) {
        let msg = `${name} toggled to '${isOpen ? 'open' : 'closed'}'`;
        this.dropdownEvents.push(msg);
    }
    dropdownClosed(name: string) {
        let msg = `${name} closed`;
        this.dropdownEvents.push(msg);
    }
    dropdownOpened(name: string) {
        let msg = `${name} opened`;
        this.dropdownEvents.push(msg);
    }
    dropdownClearEvents() {
        this.dropdownEvents = [];
    }
}