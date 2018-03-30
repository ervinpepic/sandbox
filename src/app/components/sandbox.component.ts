import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
            <h1>{{ name }} is {{ age }} years old.</h1>
            <h2>My name is {{ person.firstName}} {{ person.lastName }}
            <ul>
                <li>{{ 'Hello World' }}</li>
                <li>{{ 1 + 1}}</li>
                <li>{{ showAge() }}</li>
            </ul>
        `
})

export class SandboxComponent {
    name = 'Ervin Pepic';
    age = 24;
    person = {
        firstName: 'Emel', lastName: 'Pepic' 
    }

    constructor() {
        console.log('Constructur ran...');
        // this.age = 36;
        this.hasBirthday();
    }

    hasBirthday() {
        this.age += 1
    }

    showAge() {
        return this.age;
    }
}