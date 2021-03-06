import { Component } from '@angular/core';

import { DataService } from './../../services/data.service';



@Component({
    selector: 'sandbox',
    template: `
            <div class="container">
            <h1 class="text-center mt-5 mb-5">Hello World</h1>
        
                <div class="row">
                    <div class="col">
                
                        <form (submit)="onSubmit(isEdit)">
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
                        <input type="submit" class="btn btn-success" value="Submit">
                        </form>
                
                    </div>
                
                
                    <div class="col">
                        <div *ngFor="let user of users">
                        <div class="well">
                            <ul class="list-group">
                            <li class="list-group-item mb-3">
                            Name: {{user.name}} 
                            Email: {{user.email}} 
                            Phone: {{user.phone}}
                            <span><button class="btn btn-danger btn-sm float-right ml-1" (click)="onDelete(user.id)">Delete</button></span>
                            <span><button class="btn btn-primary btn-sm float-right" (click)="onEdit(user)">Edit</button></span>
                            </li>
                            
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
        id: '',
        name: '',
        email: '',
        phone: ''
    }
    isEdit: boolean = false;

    constructor(public dataService: DataService) {
        this.dataService.getUsers().subscribe(korisnici => {
            // console.log(korisnici);
            this.users = korisnici;
        });
    }

    onSubmit(isEdit) {
        if (isEdit) {
            this.dataService.updateUser(this.user).subscribe(korisnik => {
                for(let i = 0; i < this.users.length; i++) {
                    if(this.users[i].id == this.user.id) {
                        this.users.splice(i,1);
                    }            
                }
                
            });
        } else {
            this.dataService.addUser(this.user).subscribe(korisnikDodaj => {
                console.log(korisnikDodaj);
                this.users.unshift(korisnikDodaj);
            });
        }
        
            
       
        

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

    onEdit(korisnik) {
        this.isEdit = true;
        this.user = korisnik;
    }

}
 
