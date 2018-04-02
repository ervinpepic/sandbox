import { Http } from '@angular/http';

import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {


    constructor(public htrquest: Http) { }

    getUsers() {
        return this.htrquest.get('http://jsonplaceholder.typicode.com/users')
            .map(odgovor => odgovor.json());
    }

    addUser(korisnikDodaj) {
        return this.htrquest.post('http://jsonplaceholder.typicode.com/users', korisnikDodaj)
        .map(odgovor => odgovor.json());
    }

    deleteUser(id) {
        return this.htrquest.delete('http://jsonplaceholder.typicode.com/users/' + id)
        .map(odgovor => odgovor.json());
    }

    updateUser(korisnik) {
        return this.htrquest.put('http://jsonplaceholder.typicode.com/users/' + korisnik.id, korisnik)
        .map(odgovor => odgovor.json());
    }
}