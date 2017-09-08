import { Component } from '@angular/core';
import { EventBusService } from './util/event-bus.service';

@Component({
    selector: 'app-root',
    template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
    <div *ngIf="update |async; else showOff">I'm on</div>
    <ng-template #showOff><div>Off it is!</div></ng-template>
    <app-sub1></app-sub1>
  `,
    styles: []
})
export class AppComponent {
    title = 'app';
    update = this.ev.channel('toggle');
    constructor(private ev: EventBusService) {}
}
