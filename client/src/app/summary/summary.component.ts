import { Component } from '@angular/core';
import { SummaryService } from '../summary.service';

@Component({
    moduleId: module.id,
    selector: 'summary',
    templateUrl: 'summary.component.html',
    providers: [SummaryService]
})

export class SummaryComponent  {
    submitted: boolean;
    summary: Summary;
    textToSum: string;
    text: string;
    bigEnough: boolean;

    constructor(private summaryService: SummaryService) {
        this.submitted = false;
        this.textToSum = "";
        this.text = "";
        this.bigEnough = false;

        this.summary = {
            text: "",
            reduced_by: "40%",
            avg_contrast: "below",
            avg_current: "45%",
            rel_words: [
                {
                    word: "Hello",
                    relevancy: "1.7%"
                },
                {
                    word: "Sir",
                    relevancy: "1.2%"
                },
                {
                    word: "Lady",
                    relevancy: "1.0%"
                }
            ]
        };

        // this.summaryService.getSummary().subscribe(summary => {
        //     console.log(summary);
        //     this.summary = summary;
        // })
    }

    public submit() {
        this.textToSum = this.text;
        this.bigEnough = false;

        if(this.text.length <= 250) {
            this.bigEnough = true;

        }
        else {

            // Make object to send to rest api
            this.summaryService.textToSum = {
                text: this.textToSum
            }

            this.summaryService.getSummary().subscribe(summary => {
                //console.log(summary["result"]);

                this.summary = {
                    text: summary["result"]["text"],
                    reduced_by: summary["result"]["stats"]["reduced_by"],
                    avg_contrast: summary["result"]["stats"]["avg_contrast"],
                    avg_current: summary["result"]["stats"]["avg_current"],
                    rel_words: summary["result"]["stats"]["relevant_words"]
                };

                console.log("Got it!");
                console.log(this.summary);

                if(!this.submitted){
                    this.submitted = true;
                }
            });

        }
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
