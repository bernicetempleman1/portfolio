export interface ProjectItem {
picture: string;
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
      <ul class="projects-container">
        @for (item of projects; track item) {
        <li class="projects-item">
          <div class="card" class="container">
            <div class="image">
              <img
                style="vertical-align:middle"
                src="{{ item.picture}}"
                alt="Project Image"

              />
            </div>
            <div class="text">
              <h3>{{ item.name }}</h3>

            </div>
        </div>
            <p>Description: {{ item.description }}</p>
              <p>Technologies: {{ item.technologies }}</p>
              <p>Learned: {{ item.learned }}</p>
              <a href="{{ item.link }}" class="button-link" target="_blank"
                >Project Link</a
              >


        </li>
        }
      </ul>
    </div>
  `,

  styles: [
    `
      .container {
        display: flex;

      }
      img {
        max-width: 100%
      }
      .image {
        flex-basis: 40%
      }
      .text {
        font-size: 20px;
        padding-left: 20px;
      }
      .projects-container {
        list-style-type: none;
        padding: 20px;
        margin: .9em;
      }
      .projects-item {
        flex: 0 1 calc(33.33% - 20px);
        padding: 20px;
        margin: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
      }
      .card {
        padding: 20px;
        background-color: white;
        margin: 10px;
      }
      .button-link {
        display: flex;
        margin: 0 auto;
        background-color: #008cba;
        color: white;
        padding: 15px 32px;
        font-size: 16px;
        height: 25px;
        width: 100px;
      }
      .button-link:hover {
        background-color: #04aa6d; /* Green */
        color: white;
      }
    `,
  ],
})
export class ProjectsComponent {
  projects: ProjectItem[];

  constructor() {
    this.projects = [
      {
        picture: 'assets/rpg.png',
        name: 'RPG Character Builder',
        description:
          'WEB 425: Angular and TypeScript.The RPG Character Builder creates an immersive web application that caters to gamers and RPG enthusiasts.!',
        technologies: 'Angular, TypeScript, JavaScript, HTML, CSS',
        learned:
          'Angular routing, error handling and unit testing, Template Driven Forms and TDD, Dynamic Forms and TDD, Input/Output properties, HTTP client, modules and deployment',
        link: 'https://bernicetempleman1.github.io/rpg-character-builder/',
      },
      {
        picture: 'assets/vts.png',
        name: 'Virtual Taco Stand',
        description:
          'WEB 425: Angular and TypeScript.The RPG Character Builder creates an immersive web application that caters to gamers and RPG enthusiasts.!',
        technologies: 'Angular, JavaScript, HTML, CSS',
        learned:
          'Angular routing, error handling and unit testing, Template Driven Forms and TDD, Dynamic Forms and TDD, Input/Output properties, HTTP client, modules and deployment',
        link: 'https://bernicetempleman1.github.io/virtual-taco-stand/',
      },

      {
        picture: 'assets/in-n-out-books.png',
        name: 'In and Out Books',
        description:
          'WEB 420: RESTful APIs. The idea of the “In-N-Out-Books” was inspired by the love of books and the desire to create a platform where uses can manage their own collection of book',
        technologies: 'Node.js, Express, JavaScript, Jest, HTML, CSS',
        learned:
          'the purpose of APIs (Application Programming Interfaces), their functions, and how to use and manage them in the context of web development. Topics include REST methodologies, design best practices, security, testing, debugging, documentation, and the OpenAPI specification. Node.js will be used for the programming language and testing and debugging the solutions',
        link: 'https://templeman-in-n-out-books.onrender.com',
      },
      {
        picture: 'assets/in-n-out-books-method-override.png',
        name: 'In and Out Books with method override',
        description:
          'WEB 420: RESTful APIs. The idea of the “In-N-Out-Books” was inspired by the love of books and the desire to create a platform where uses can manage their own collection of book',
        technologies: 'Node.js, Express, JavaScript, Jest, HTML, CSS',
        learned:
          'the purpose of APIs (Application Programming Interfaces), their functions, and how to use and manage them in the context of web development. Topics include REST methodologies, design best practices, security, testing, debugging, documentation, and the OpenAPI specification. Node.js will be used for the programming language and testing and debugging the solutions',
        link: 'https://templeman-in-n-out-books-mo.onrender.com',
      },
      {
        picture: 'assets/whatabook-py.png',
        name: 'WhatABook',
        description: 'WEB 335: NoSQL. ',
        technologies: 'MongoDB, Python, NoSQL.',
        learned:
          'Core concepts of non-relational database structures. Topics include Key/Value pairs, Table Structures, Data Types, Data Access Controls, and NoSQL Queries. Relational databases (MySQL) are explored to contrast the capabilities of non-relational to relational database structures. Python used for database interface',
        link: 'https://github.com/bernicetempleman1/web-335/',
      },
      {
        picture: 'assets/whatabook.png',
        name: 'Node.js with Express',
        description: 'WEB 340',
        technologies: 'Node.js, Express, JavaScript',
        learned:
          'The process of building web-based applications in Node.js with Express, create web forms, collect and process information obtained from them, retrieve and update information contained in a MongoDB database, and build stand-alone RESTFul API’s. ',
        link: 'https://github.com/bernicetempleman1/web-340',
      },
      {
        picture: 'assets/web330-js2.png',
        name: 'Enterprise JavaScript II',
        description: 'WEB 330',
        technologies: 'JavaScript, HTML, CSS',
        learned:
          'Object-oriented programming, unit testing, asynchronous executions, files and streams, lambda expressions, and module bundlers. ',
        link: 'https://bernicetempleman1.github.io/web-330/',
      },
      {
        picture: 'assets/web231-js1.png',
        name: 'Enterprise JavaScript I',
        description: 'WEB 231',
        technologies: 'JavaScript, HTML, CSS',
        learned:
          'Concepts of programming using JavaScript in the Enterprise. The focus is on the JavaScript programming language syntax, software design, coding, documenting, and debugging strategies. Topics include Data Types, Reference Types, Operators, Objects, Control Statements, and Functions. Projects use these topics in an intensive, hands-on format to build enterprise relevant solutions. ',
        link: 'https://bernicetempleman1.github.io/web-231/',
      },
      {
        picture: 'assets/biosite.png',
        name: 'BioSite',
        description: 'WEB 200: GitHub BioSite Portfolio',
        technologies: 'HTML, CSS',
        learned:
          'The fundamentals of web development: web standards and accessibility/usability',
        link: 'https://bernicetempleman1.github.io/bioSite/',
      },
      {
        picture: 'assets/rescue.png',
        name: 'Rescue',
        description: 'WEB 200: Rescue website',
        technologies: 'HTML, CSS',
        learned:
          'The fundamentals of web development: web standards and accessibility/usability',
        link: 'https://bernicetempleman1.github.io/rescue/',
      },
      {
        picture: 'assets/portfolio-screen.png',
        name: `Bernice Templeman's Portfolio`,
        description: 'WEB 425: Angular and TypeScript.',
        technologies: 'Angular, TypeScript, JavaScript, HTML, CSS',
        learned:
          'Angular routing, error handling and unit testing, Angular 404 Page Not Found, Input/Output properties',
        link: 'https://bernicetempleman1.github.io/portfolio/',
      },
    ];
  }
}
