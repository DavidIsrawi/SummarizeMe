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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SummaryService = (function () {
    function SummaryService(http) {
        this.http = http;
        console.log('SummaryService Initialized...');
    }
    SummaryService.prototype.getSummary = function () {
        // For rest api : http://127.0.0.1:8080/summary
        // For db.json : http://localhost:3000/db
        return this.http.post('http://127.0.0.1:8080/summary', this.textToSum)
            .map(function (res) { return res.json(); });
    };
    return SummaryService;
}());
SummaryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SummaryService);
exports.SummaryService = SummaryService;
//# sourceMappingURL=summary.service.js.map