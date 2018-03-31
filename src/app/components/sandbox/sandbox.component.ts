import { Component } from '@angular/core';

import { Customer } from './../Customer';


@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <div>
            <input type="text" (keyup)="fireEvent($event)" placeholder="keyup"/>
        </div>
        <div>
        <input type="text" (keydown)="fireEvent($event)" placeholder="keydown"/>
            </div>
            <div>
            <input type="text" (focus)="fireEvent($event)" placeholder="focus"/>
        </div>
        <div>
        <input type="text" (blur)="fireEvent($event)" placeholder="blur"/>
    </div>
    <div>
    <input type="text" (cut)="fireEvent($event)" placeholder="cut"/>
    
</div>
<div>
    <input type="text" (copy)="fireEvent($event)" placeholder="copy"/>
    
</div>

<div>
    <input type="text" (paste)="fireEvent($event)" placeholder="paste"/>
    
</div>
<hr>
<div>     <input type="text" (keyup)="changeText($event)" placeholder="changeText" value={{text}}/>      </div>

<h2>{{ text }}</h2>
    `
})

export class SandboxComponent {
    text: string = 'Hello';
    fireEvent(e) {
        console.log(e.type);
    }

    changeText(e) {
        this.text = e.target.value;
    }
}   