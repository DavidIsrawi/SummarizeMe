"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var summary_service_1 = require("../services/summary.service");
var HomeComponent = (function () {
    function HomeComponent(summaryService) {
        this.summaryService = summaryService;
        this.submitted = false;
        this.textToSum = "";
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
    HomeComponent.prototype.submit = function (text) {
        var _this = this;
        this.textToSum = text;
        // Make object to send to rest api
        this.summaryService.textToSum = {
            text: this.textToSum
        };
        this.summaryService.getSummary().subscribe(function (summary) {
            //console.log(summary["result"]);
            _this.summary = {
                text: summary["result"]["text"],
                reduced_by: summary["result"]["stats"]["reduced_by"],
                avg_contrast: summary["result"]["stats"]["avg_contrast"],
                avg_current: summary["result"]["stats"]["avg_current"],
                rel_words: summary["result"]["stats"]["relevant_words"]
            };
            console.log("Got it!");
            console.log(_this.summary);
            if (!_this.submitted) {
                _this.submitted = true;
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: 'home.component.html',
        providers: [summary_service_1.SummaryService]
    }),
    __metadata("design:paramtypes", [summary_service_1.SummaryService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map