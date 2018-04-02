import { Component } from '@angular/core';

import { DataService } from './../../services/data.service';



@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <div *ngFor="let user of users">
            <div class="well">
                <ul class="list-group">
                    <li class="list-group-item">Name: {{user.name}} email: {{user.email}} phone: {{user.phone}}</li>
                </ul>
            </div>
        </div>
        
    `

})

export class SandboxComponent {
    users: any[];
    constructor(public dataService: DataService) {
        this.dataService.getUsers().subscribe(korisnici => {
            // console.log(korisnici);
            this.users = korisnici;
        });
    }

    }
 
