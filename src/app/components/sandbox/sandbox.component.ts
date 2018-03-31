import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <button (click)="changeValue()">Change Value</button>
        <div *ngIf="value">
            <h1>{{ text }}</h1>
        </div>
    `
})

export class SandboxComponent {
    text: string = 'Hello World';
    value: boolean = true;

    changeValue(){
        // this.value = false;
        this.value = !this.value;
    }

}   