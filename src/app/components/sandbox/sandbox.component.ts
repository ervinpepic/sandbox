import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">Font Size depends on special property</div>

        <div [ngStyle]="currentStyles">This div is initialy saveable & special</div>
    `
})

export class SandboxComponent {
    isSpecial = true;
    canSave = true;
    currentStyles = {};

    constructor() {
        this.setCurrentStyles();
    }

    setCurrentStyles() {
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-size': this.isSpecial ? '24px' : '12px'
        }
    }
}   