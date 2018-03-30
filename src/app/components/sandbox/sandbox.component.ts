import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1> 
        {{ people }}

        <ul>
            <li *ngFor="let person of people">
                {{ person }}
            </li>
        </ul>

        <ul>
            <li *ngFor="let person of people; let i = index">
                {{i + 1}} {{ person }}
            </li>
        </ul>

        <ul>
        <li *ngFor="let person of people2">
            {{ person.firstName }}
        </li>
    </ul>
    `
})

export class SandboxComponent {
    people = ['Ervin', 'Emel', 'Emil', 'Izet'];
    people2 = [
        {
            firstName: 'Ervin',
            lastName: 'Pepic'
        },
        {
            firstName: 'Emel',
            lastName: 'Pepic'
        },
        {
            firstName: 'Ines',
            lastName: 'Pepic'
        }
    ];

    constructor() {
        this.people[2] = 'PEPA';
    }
}