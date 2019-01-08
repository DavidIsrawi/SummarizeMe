import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SummaryService {
    textToSum: {
        text: string;
    };

    constructor(private http: Http) {
        console.log('SummaryService Initialized...');
    }

    getSummary() {
        // For rest api : http://127.0.0.1:8080/summary
        // For db.json : http://localhost:3000/db
        // For AWS Beanstalk: http://summarizeme.nrfkys4df7.us-east-1.elasticbeanstalk.com/stats
        return this.http.post('https://summarize-me.herokuapp.com/summary', this.textToSum)
            .map(res => res.json());
    }
}
