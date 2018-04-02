import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    data: Observable<Array<number>>;

    constructor() { }

    getData() {
        this.data = new Observable(osluskivac => {
            setTimeout(() => {
                osluskivac.next([1]);
            }, 1000);
            setTimeout(() => {
                osluskivac.next([2]);
            }, 2000);
            setTimeout(() => {
                osluskivac.next([3]);
            }, 3000);
            setTimeout(() => {
                osluskivac.next([5]);
            }, 3000);
            setTimeout(() => {
                osluskivac.complete();
            }, 5000);
        });
        return this.data;
    }

}