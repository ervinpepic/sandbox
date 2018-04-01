import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    users: string[];

    constructor() {
        this.users = ['Ervin', 'Emel', 'Erna', 'Hidajet', 'Ines', 'Tijana'];
    }

    getUsers() {
        return this.users;
    }
}