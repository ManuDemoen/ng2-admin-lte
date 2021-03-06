import { Input, Output, ElementRef, EventEmitter, HostBinding } from '@angular/core';

import { ElementType, eventTriggeredInsideElement } from '../common/index';

export abstract class DropdownComponentBase {
    @Input()
    public type: ElementType = 'default';

    @Input()
    @HostBinding('class.open')
    public isOpen: boolean = false;

    @HostBinding('class.btn-group')
    private get btnGroup(): boolean { return true; };

    @Output()
    public toggled: EventEmitter<any> = new EventEmitter();

    @Output()
    public opened: EventEmitter<any> = new EventEmitter();

    @Output()
    public closed: EventEmitter<any> = new EventEmitter();

    constructor(private element: ElementRef) { }

    clicked($event: any) {
        this.changeState(!this.isOpen);
    }

    clickedOnDocument($event: any) {
        if (eventTriggeredInsideElement($event, this.element.nativeElement)) {
            return;
        }
        this.changeState(false);
    }

    private changeState(isOpen: boolean) {
        if (this.isOpen === isOpen) { return; };
        this.isOpen = isOpen;
        if (isOpen) {
            this.opened.emit({});
        } else {
            this.closed.emit({});
        }
        this.toggled.emit({isOpen});
    }
}
