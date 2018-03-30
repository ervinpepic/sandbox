import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `<h1>Hello {{ name }}</h1>`
})

export class SandboxComponent {
    name: string = 'Ervin Pepic';
    age: number = 24;
    hasChlider: boolean = false;
    city: any = 'Rozaje';
    myNumbersArray: number[] = [1, 2, 3];
    myStringsArray: string[] = ['Hello', 'World'];
    myAnyArray: any[] = [1, 2, 'Hello'];
    myTuple: [string, number] = ['Hello', 3];
    unusable: void = undefined;
    u: undefined = undefined;
    empt: null = null;

    constructor() { 
        this.hasChlider = true;
        this.city = [1, 2, 3];
        this.myNumbersArray = [12, 21, 12]
    }
}