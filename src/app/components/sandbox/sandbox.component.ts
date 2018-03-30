import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <h4 [class.special]="isSpecial">This class binding is special</h4>
        <h4 [ngClass]="currentClasses">This Div is initialy special and savable</h4>
    `,
    styles:[`
    .special {
           color:green;
    }
    .savable{
        text-transform: uppercase;
    }
    `]
})

export class SandboxComponent {
    isSpecial = true;
    canSave = true;
    currentClasses = {};

    constructor() {
        this.setCurrentClasses();
    }

    setCurrentClasses() {
        this.currentClasses = {
            savable: this.canSave,
            special: this.isSpecial
        }
    }
}   