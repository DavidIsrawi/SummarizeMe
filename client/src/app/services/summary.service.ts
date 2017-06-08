import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SummaryService {
    constructor(private http: Http) {
        console.log('SummaryService Initialized...');
    }

    getSummary() {
        return this.http.get('http://localhost:3000/db')
            .map(res => res.json());
    }
}
