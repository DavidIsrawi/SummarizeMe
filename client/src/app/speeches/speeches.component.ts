import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../summary.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import { Speeches } from './speeches'

@Component({
    moduleId: module.id,
    selector: 'speeches',
    templateUrl: 'speeches.component.html',
    providers: [SummaryService, Speeches]
})
export class SpeechesComponent implements OnInit {

    // speech: string;
    speeches: Speech[];

    constructor(private summaryService: SummaryService, private speechSamples: Speeches) {
        // this.http.get('../../assets/speeches.json')
        //         .map(res => this.speeches = res.json())
        //         .forEach(data => console.log(data));
        this.speeches = speechSamples.speeches;
    }

    ngOnInit() {
    }

    runSample(speech) {
        console.log(speech);
    }

}

interface Speech {
    speech: string;
    title: string;
}
