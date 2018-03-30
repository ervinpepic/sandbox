import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    templateUrl: `./sandbox.component.html`,
    styleUrls: ['./sandbox.component.css']
    // styles: [`
    //     .special {
    //         color: green;
    //         font-size:20px;
    //         text-transofrm: uppercase
    //     }
    // `]
})

export class SandboxComponent {
    customer: Customer;
    customers: Customer[];

    constructor() {
        this.customer = {
            id: 1,
            name: 'Ervin Pepic',
            email: 'ervin.hack@gmail.com'
        }

        this.customers = [
            {
                id: 2,
                name: 'Emel Pepic',
                email: 'pepic.emel@gmail.com'
            },
            {
                id: 3,
                name: 'Erna Pepic',
                email: 'ernapepic@gmail.com'
            }
        ];
    }
}