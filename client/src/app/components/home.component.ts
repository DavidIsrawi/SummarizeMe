import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent  {
    submitted: boolean;

    constructor() {
        this.submitted = false;
    }

    submit() {
        this.submitted = !this.submitted;
    }
}
