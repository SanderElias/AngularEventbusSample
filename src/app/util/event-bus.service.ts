import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export type Payload = any;
export interface EventBusMessage {
    channel: string;
    payload: Payload;
}

@Injectable()
export class EventBusService {
    public listen: Observable<Payload>;

    private next;
    constructor() {
        this.listen = new Observable(observer => {
            this.next = (payload: Payload) => observer.next(payload);
            return _ => _ /* nothing to clean */;
        });
        this.channelEmmiter = this.channelEmmiter.bind(this);
        this.emit = this.emit.bind(this);
    }

    allChannels(): Observable<EventBusMessage> {
        return this.listen;
    }

    channel(channelName: string): Observable<Payload> {
        return this.listen
            .filter(e => e.channel === channelName)
            .map(e => e.payload);
    }

    channelEmmiter(channelName) {
        console.log('made listener for', channelName);
        return (payload: Payload): void =>
            this.emit({ channel: channelName, payload });
    }

    emit({ channel, payload }: { channel: string; payload: any }): void {
        console.log('emit', channel);
        this.next({ channel, payload });
    }
}
