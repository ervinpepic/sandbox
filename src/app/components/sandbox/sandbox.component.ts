import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello 
        <!--
        <span *ngIf="showName"> {{ name }} </span>
        <span *ngIf="!showName"> World </span>-->

        <span *ngIf="showName; else noName"> {{ name }} </span>
        <ng-template #noName>World</ng-template>

        <p>Hello {{ showName ? name : 'World' }}</p>
        <hr>
        <div [ngSwitch]="greeting">
            <div *ngSwitchCase="'1'">Hello Wolrd</div>
            <div *ngSwitchCase="'2'">Hello Pepa</div>
            <div *ngSwitchCase="'3'">Hello Emel</div>
            <div *ngSwitchDefault>Helloooooo</div>
        </div>
        </h1>
        


    `
})

export class SandboxComponent {
    name: string = 'Ervin';
    showName: boolean = false;
    greeting: number = 10;
}