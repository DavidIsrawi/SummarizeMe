import { Component } from '@angular/core';
import { Speeches } from './speeches';
import { SummaryService } from '../summary.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [SummaryService, Speeches]
})

export class HomeComponent  {
    submitted: boolean;
    textToSum: string;
    text: string;
    bigEnough: boolean;
    speeches: Speech[];
    summary: Summary;

    constructor(private summaryService: SummaryService, private speechSamples: Speeches) {
        this.submitted = false;
        this.text = "";
        this.bigEnough = true;
        this.speeches = speechSamples.speeches;

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
    }

    submit() {
        this.submitted = false;
        this.bigEnough = true;
        if(this.text.length <= 250) {
            console.warn("Text is too short! Make sure it's 250 characters or more");
            this.bigEnough = false;
        }
        else {
            this.summaryService.textToSum = {
                text: this.text
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
                    console.log(this.submitted);
                }
            });
        }
    }

    runSample(speech) {
        this.text = speech;
        this.submit();
    }
}

interface Speech {
    speech: string;
    title: string;
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
