import { Component } from '@angular/core';

import { DataService } from './../../services/data.service';



@Component({
    selector: 'sandbox',
    template: `

            <div class="container">
            <h1>Hello World</h1>
            <div class="row">

            <div class="col-md-6">
                <form (submit)="onSubmit()">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" [(ngModel)]="user.name" name="name">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" [(ngModel)]="user.email" name="email">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" [(ngModel)]="user.phone" name="phone">
                </div>
                <input type="submit" class="btn btn-success"  value="Submit">
                </form>
            </div>
            </div>

            <div class="row">
            <div class="col-md-6">
                <div *ngFor="let user of users">
                <div class="well">
                    <ul class="list-group">
                    <li class="list-group-item">Name: {{user.name}} email: {{user.email}} phone: {{user.phone}}</li>
                    <button class="btn btn-danger btn-sm" (click)="onDelete(user.id)">Delete</button>
                    </ul>
                   
                </div>
                </div>
            </div>
            </div>

            </div>
    `

})

export class SandboxComponent {
    users: any[];
    user = {
        name: '',
        email: '',
        phone: ''
    }
    constructor(public dataService: DataService) {
        this.dataService.getUsers().subscribe(korisnici => {
            // console.log(korisnici);
            this.users = korisnici;
        });
    }

    onSubmit() {
        this.dataService.addUser(this.user).subscribe(korisnikDodaj => {
            console.log(korisnikDodaj);
            this.users.unshift(korisnikDodaj);
            
        });
        

    }

    onDelete(id) {
        this.dataService.deleteUser(id).subscribe(odgovr => {
            
            for(let i=0; i< this.users.length; i++) {
                if(this.users[i].id == id) {
                    this.users.splice(i,1);
                }            
            }
        });
    }

    }
 
