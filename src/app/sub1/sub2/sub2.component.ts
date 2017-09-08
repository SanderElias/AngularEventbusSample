import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../util/event-bus.service';

@Component({
    selector: 'app-sub2',
    template: `
    <p>
      sub2 Works!
    </p>
    <button (click)="trigger(true)">on</button>
    <button (click)="trigger(false)">off</button>
    `,
    styles: []
})
export class Sub2Component {
    trigger = this.ev.channelEmmiter('toggle');
    constructor(private ev: EventBusService) {}
}
