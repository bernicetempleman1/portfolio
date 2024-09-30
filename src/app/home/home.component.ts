export interface Todo {
  name: string;
  description: string;
}

export interface BucketList {
  todos: Todo[];
}

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketListComponent } from '../bucket-list/bucket-list.component';

@Component({
  selector: 'app-home',
  standalone: true,

  template: `

    <div class="intro">
      <div>

      <h1>Bernice Templeman's Portfolio</h1>
      <h2></h2>
      <p>
        Brief Introduction: Hi, my name is Bernice Templeman, and I am a
        Software Developer. I am completing a bachelor of science in web
        development at Bellevue University.
      </p>
      <p>
        I first learned to program in high school and have always continued to
        update my skill set continually. I previously completed a bachelor of
        science degree in Computer Science and a master of science degree in
        Computer Information Systems. I have also worked in Information
        Technology as a Software Engineer, ServiceNow Developer and
        Administrator, Unix and Linux System Administrator, Network Attached
        Storage Technical Suppor Engineer II, and computer programmer.
      </p>
      <p>
        I'm eager to leverage my expertise to help Companies achieve their
        financial goals and explore new growth opportunities.
      </p>
      <p>
        In my spare time, I have worked on WordPress and WIX website
        development, learning new skills, exercising, and reading health and
        nutrition articles on longevity.
      </p>
      <p></p>
    </div>

    <div class="bucket-list">
      <app-bucket-list [bucketlist]="bucketlist"></app-bucket-list>
    </div>
    </div>

  `,
  styles: [
    `
    .intro {

      display: flex;
        justify-content: space-between;
        gap: 10px;

      }
      .highlights-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
      }
      .highlight {
        text-align: center;
        flex: 0 1 calc(33.333% - 20px);
        box-sizing: border-box;
      }
      .highlight img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
      .highlight p {
        margin-top: 10px;
      }
    `,
  ],
  imports: [CommonModule, BucketListComponent],
})

export class HomeComponent {
  todos: Todo[];
  bucketlist: BucketList;

  name: string = '';
  description: string = '';

  constructor() {
    this.todos = [{
      name: 'Software development paid work',
      description: 'Happy'
    },
    ];
    this.bucketlist = { todos: [] };

    for(var i = 0; i <= this.todos.length - 1; i++){
      this.bucketlist.todos.push(this.todos[i]);
    }

  }

  @Output() orderUpdated = new EventEmitter<BucketList>();
  }

