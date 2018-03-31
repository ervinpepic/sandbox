import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-6">

                <h1 class="mb-5 mt-5">Hello World</h1>
            
                <form (submit)="onSubmit()">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" [(ngModel)]="name" name="name">
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
    name: string = '';
    users: string[] = ['Ervin', 'Emel', 'Erna', 'Hido'];
    
    onSubmit() {
        this.users.push(this.name);
        this.name = '';


    }
}   