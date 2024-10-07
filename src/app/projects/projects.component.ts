export interface ProjectItem {
  name: string;
  description: string;
  technologies: string;
  learned: string;
  link: string;
}

import { CommonModule } from '@angular/common';
import { CommaExpr, Comment, compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Bernice Templeman's Projects</h1>
      <p>
        Explore our selection of handcrafted projects, each filled with fresh
        technologies and vibrant learnings to satisfy your cravings.
      </p>
      <ul class="players-container">
        @for (item of projects; track item) {
        <li class="projects-item">
          <div class="card">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <p>{{ item.technologies }}</p>
            <p>{{ item.learned }}</p>
            <p>{{ item.link }}</p>
            <a href="{{ item.link }}">Link</a>

          </div>
        </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      .projects-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }
      .projects-item {
        flex: 0 1 calc(33.33% - 20px);
        margin: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .card {
        padding: 20px;
        background-color: white;
      }
    `,
  ],
})
export class ProjectsComponent {
  projects: ProjectItem[];

  constructor() {
    this.projects = [
      {
        name: `Bernice Templeman's Portfolio`,
        description:
          'WEB 425: Angular and TypeScript.',
        technologies: 'Angular, TypeScript, JavaScript, HTML, CSS',
        learned: '',
        link: 'https://github.com/bernicetempleman1/portfolio',
      },
      {
        name: 'RPG Character Builder',
        description:
          'WEB 425: Angular and TypeScript.The RPG Character Builder creates an immersive web application that caters to gamers and RPG enthusiasts.!',
        technologies: 'Angular, TypeScript, JavaScript, HTML, CSS',
        learned: '',
        link: 'https://bernicetempleman1.github.io/rpg-character-builder/',
      },
      {
        name: 'Virtual Taco Stand',
        description:
          'WEB 425: Angular and TypeScript.The RPG Character Builder creates an immersive web application that caters to gamers and RPG enthusiasts.!',
        technologies: 'Angular, JavaScript, HTML, CSS',
        learned: '',
        link: 'https://bernicetempleman1.github.io/virtual-taco-stand/',
      },

      {
        name: 'In and Out Books',
        description:
          'WEB 420: RESTful APIs. The idea of the “In-N-Out-Books” was inspired by the love of books and the desire to create a platform where uses can manage their own collection of book',
        technologies: '',
        learned: '',
        link: 'https://templeman-in-n-out-books.onrender.com',
      },
      {
        name: 'WhatABook',
        description:
          'WEB 335: NoSQL. ',
        technologies: '',
        learned: '',
        link: 'https://github.com/bernicetempleman1/web-335/',
      },
      {
        name: 'Node.js with Express',
        description:
          'WEB 340',
        technologies: 'Node.js, Express, JavaScript',
        learned: '',
        link: 'https://github.com/bernicetempleman1/web-340',
      },
      {
        name: 'Enterprise JavaScript II',
        description:
          'WEB 330',
        technologies: 'JavaScript, HTML, CSS',
        learned: '',
        link: 'https://bernicetempleman1.github.io/web-330/',
      },
      {
        name: 'Enterprise JavaScript I',
        description:
          'WEB 231',
        technologies: 'JavaScript, HTML, CSS',
        learned: '',
        link: 'https://bernicetempleman1.github.io/web-231/',
      },
      {
        name: 'BioSite',
        description:
          'WEB 200: GitHub BioSite Portfolio',
        technologies: 'HTML, CSS',
        learned: '',
        link: 'https://bernicetempleman1.github.io/bioSite/',
      },
      {
        name: 'Rescue',
        description:
          'WEB 200: Rescue website',
        technologies: 'HTML, CSS',
        learned: '',
        link: 'https://bernicetempleman1.github.io/rescue/',
      },
    ];
  }
}

