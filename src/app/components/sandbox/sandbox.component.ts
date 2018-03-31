import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <button (click)="fireEvent($event, 'Hello')">Click Event</button>
        <button (mouseover)="fireEvent($event)">Mouse over</button>
        <button (mousedown)="fireEvent($event)">Mouse down</button>
        <button (mouseup)="fireEvent($event)">Mouse up</button>
        <button (dblclick)="fireEvent($event)">Double click</button>
        <button (drag)="fireEvent($event)">Drag</button>
    `
})

export class SandboxComponent {

    fireEvent(e) {
        // console.log('Button Clicked');
        console.log(e.type);
    }
}   