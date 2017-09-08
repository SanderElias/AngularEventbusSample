import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventBusService } from './util/event-bus.service';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub1/sub2/sub2.component';

@NgModule({
    declarations: [AppComponent, Sub1Component, Sub2Component],
    imports: [BrowserModule],
    providers: [EventBusService],
    bootstrap: [AppComponent]
})
export class AppModule {}
