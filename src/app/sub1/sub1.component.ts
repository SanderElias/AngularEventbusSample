import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sub1',
    template: `
    <p>
      sub1 Works!
    </p>
    <app-sub2></app-sub2>
  `,
    styles: []
})
export class Sub1Component implements OnInit {
    constructor() {}

    ngOnInit() {}
}
