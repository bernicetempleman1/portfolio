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
        name: 'RPG Character Builder',
        description:
          'The RPG Character Builder creates an immersive web application that caters to gamers and RPG enthusiasts.!',
        technologies: 'Angular, JavaScript, HTML, CSS',
        learned: '',
        link: '',
      },
      {
        name: 'In and Out Books',
        description:
          'The idea of the “In-N-Out-Books” was inspired by the love of books and the desire to create a platform where uses can manage their own collection of book',
        technologies: 'Mage',
        learned: '',
        link: 'https://templeman-in-n-out-books.onrender.com',
      },
      {
        name: 'BioSite',
        description:
          'GitHub BioSite Portfolio',
        technologies: 'HTML, CSS',
        learned: '',
        link: 'https://bernicetempleman1.github.io/bioSite/',
      },
      {
        name: 'WhatABook',
        description:
          '',
        technologies: 'Mage',
        learned: 'Eternal',
        link: 'https://github.com/bernicetempleman1/web-335/',
      },
      {
        name: '',
        description:
          '',
        technologies: '',
        learned: '',
        link: '',
      },
      {
        name: '',
        description:
          '',
        technologies: '',
        learned: '',
        link: '',
      },
      {
        name: '',
        description:
          '',
        technologies: '',
        learned: '',
        link: '',
      },
      {
        name: '',
        description:
          '',
        technologies: '',
        learned: '',
        link: '',
      },
      {
        name: '',
        description:
          '',
        technologies: '',
        learned: '',
        link: '',
      },
      {
        name: '',
        description:
          '',
        technologies: '',
        learned: '',
        link: '',
      },
    ];
  }
}

