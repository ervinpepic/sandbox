import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-6">

                <h1 class="mb-5 mt-5">Hello World</h1>
            
                <form>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" [(ngModel)]="name" name="name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Age</label>
                        <input type="number" [(ngModel)]="age" name="age" class="form-control">
                    </div>
                    <input type="submit" value="Submit" class="btn btn-success">
                </form>   
                <br>
                <h5>Name: {{name}}</h5>
                <h6>Age: {{age}}</h6>
            </div>    
        </div>
    </div>
    `
})

export class SandboxComponent {
    name: string = '';
    age: number = 0;
}   