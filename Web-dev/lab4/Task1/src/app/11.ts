import {Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-user',
    template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
          Static Image:
            <div class="image-container">
                <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" priority />
            </div>
        </li>
        <li>
          Dynamic Image:
          <div class="image-container">
            <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" priority />
          </div>
        </li>
    </ul>
  `,
    imports: [NgOptimizedImage],
})
export class User {
    logoUrl = '/logo.svg';
    logoAlt = 'Angular logo';
    username = 'youngTech';
}