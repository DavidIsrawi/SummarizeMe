import { Component } from '@angular/core';
import { SummaryService } from '../services/summary.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [SummaryService]
})

export class HomeComponent  {
    submitted: boolean;
    summary: Summary;

    constructor(private summaryService: SummaryService) {
        this.submitted = false;

        this.summaryService.getSummary().subscribe(summary => {
            console.log(summary);
            this.summary = summary;
        })
    }

    submit() {
        this.submitted = !this.submitted;
    }
}

interface Summary {
    text: string,
    reduced_by: string,
    avg_contrast: string,
    avg_current: string,
    rel_words: Word[]
}

interface Word {
    word: string,
    relevancy: string
}
