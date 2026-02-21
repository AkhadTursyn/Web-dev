// app.component.ts
import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';

@Component({
    selector: 'app-root',
    template: ` Reverse Machine: {{ word | reverse }} `,
    imports: [ReversePipe],
})
export class App {
    word = 'You are a champion';
}



// reverse.pipe.ts
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(value: string): string {
        let reverse = '';
        for (let i = value.length - 1; i >= 0; i--) {
            reverse += value[i];
        }
        return reverse;
    }
}