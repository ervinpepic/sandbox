import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-6">

                <h1 class="mb-5 mt-5">Hello World</h1>
            
                <form novalidate #f="ngForm" (ngSubmit)="onSubmit(f)">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" [(ngModel)]="user.name" name="name" #userName="ngModel" minlength="2" required >
                        <div *ngIf="userName.errors?.required && userName.touched" class="alert alert-warning">Name is required</div>
                        <div *ngIf="userName.errors?.minlength && userName.touched" class="alert alert-warning">Name should be at least two characters long</div>
                    </div>
                    <div class="form-group">
                        <label>Eamil</label>
                        <input type="email" class="form-control" [(ngModel)]="user.email" name="email" #userEmail="ngModel" required>
                        <div *ngIf="userEmail.errors?.required && userEmail.touched" class="alert alert-warning">You must enter an email</div>
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            [(ngModel)]="user.phone" 
                            name="name" 
                            #userPhone="ngModel" 
                            minlength="8" 
                        >
                        <div *ngIf="userPhone.errors?.minlength && userPhone.touched" class="alert alert-warning">Enter a valid phone number</div>
                    </div>
                    <input type="submit" value="Submit" class="btn btn-success">
                </form>   
                <br>
                <ul class="list-group">
                    <li class="list-group-item" *ngFor="let user of users">{{user}}</li>
                </ul>
            </div>    
        </div>
    </div>
    `
})

export class SandboxComponent {
    user = {
        name: '',
        email: '',
        phone: ''
    }

    onSubmit({value, valid}) {
        if(valid){
            console.log(value);
        } else {
            console.log('Form is invalid');
        }
    }
 
}   