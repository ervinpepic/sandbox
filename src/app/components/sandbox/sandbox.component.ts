import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    template: `<h1>Hello World</h1>
        <p>My b {{ birthday | date | uppercase }}</p>
        <p>My bdate {{ birthday | date:"MM-dd--yy" }}</p>
        <p>Bron in {{ birthday | date: "yyyy" }}</p>
        <p>I love {{ 'cake' | uppercase }}</p>
        <p>I love {{ 'CATS' | lowercase }}</p>
        <p>Your total is {{ total | currency: "EUR" }}</p>
        <p>Your fee {{ fee | percent }}</p>
    `
})

export class SandboxComponent {
   birthday = new Date(1993, 10, 21);
   total:number = 500;
   fee: number = 0.1;
}   