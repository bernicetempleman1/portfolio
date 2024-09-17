import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p></p>
    <a routerLink="/">Home Page</a>
  `,
  styles: ``
})
export class NotFoundComponent {

}
