// app.routes.ts
import {Routes} from '@angular/router';
import {Home} from './home/home';
import {User} from './user/user';

export const routes: Routes = [
    {
        path: '',
        title: 'AppComponent Home Page',
        component: Home,
    },
];


// home/home.ts
import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    template: ` <div>Home Page</div> `,
})
export class Home {}

// user/user.ts
import {Component} from '@angular/core';

@Component({
    selector: 'app-user',
    template: ` <div>Username: {{ username }}</div> `,
})
export class User {
    username = 'youngTech';
}