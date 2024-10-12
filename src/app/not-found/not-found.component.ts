import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p><a href="/">Home Page</a></p>
  `,
  styles: `
  h1, h2, p {
    float: left;
    text-align: center;
    width: 300px;
    padding: 10px;
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }
  `,
})
export class NotFoundComponent {}
