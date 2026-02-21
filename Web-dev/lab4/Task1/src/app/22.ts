import {LowerCasePipe} from '@angular/common';
import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `{{ username | lowercase }}`,
    imports: [LowerCasePipe],
})
export class App {
    username = 'yOunGTECh';
}