export interface Degree {
  university: string;
  location: string;
  degree: string;
  field: string;
  graduation: string;
}

export interface HardSkills {
  skill: string;
}

export interface SoftSkills {
  skill: string;
}

export interface Experience {
  employer: string;
  location: string;
  title: string;
  description: string;
  dates: string;
}

export interface Certifications {
  name: string;
  company: string;
  date: string;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Bernice Templeman's Resume</h1>

    <div>
      <div>
        <h2>Education</h2>
        <ul class="degree-container">
          @for (item of degrees; track item) {
          <li class="degree-item">
            <div class="card">
              <h3>{{ item.university }}</h3>
              <p>{{ item.location }}</p>
              <p>{{ item.degree }}</p>
              <p>{{ item.field }}</p>
              <p>{{ item.graduation }}</p>
            </div>
          </li>
          }
        </ul>
      </div>

      <div id="wrapper">
        <h2>Skills</h2>

        <div id="hardskills">
          @if (hardskills.length > 0) {
          <ul>
            @for (skill of hardskills; track skill) {
            <li>
              <strong>{{ skill.skill }} </strong>
              <br />
            </li>
            }
          </ul>
          } @else {
          <p></p>
          }
        </div>

        <div id="softskills">
          @if (softskills.length > 0) {
          <ul>
            @for (skill of softskills; track skill) {
            <li>
              <strong>
                {{ skill.skill }}
              </strong>
              <br />
            </li>
            }
          </ul>
          } @else {
          <p>No todos have been created yet</p>
          }
        </div>
      </div>

      <div>
        <h2>Experience</h2>
        <ul class="experience-container">
          @for (item of experiences; track item) {
          <li class="experience-item">
            <div class="card">
              <h3>{{ item.employer }}</h3>
              <p>{{ item.location }}</p>
              <p>{{ item.title }}</p>
              <p>{{ item.description }}</p>
              <p>{{ item.dates }}</p>
            </div>
          </li>
          }
        </ul>
      </div>
      <div>
        <h2>Certifications</h2>
        <ul>
          <li>Certified Application Developer: December 01, 2022</li>
          <li>ServiceNow Certified System Administrator: December 03, 2022</li>
          <li>
            Certified Implementation Specialist in IT Service Management:
            December 03, 2022
          </li>
          <li>
            Certified Implementation Specialist in Human Resources: December 03,
            2022
          </li>
          <li>
            Certified Implementation Specialist in Event Management: January 14,
            2023
          </li>
          <li>
            Certified Application Specialist in Performance Analytics: January
            14, 2023
          </li>
        </ul>
      </div>
      <div>
        <h2>Download My Resume</h2>
        <p>
          <a
            href="https://drive.google.com/file/d/1XnJwTrCZN8uItGYQ5AMNbhJZsAMf9iFp/view?usp=drive_link"
            >Resume</a
          >
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .degree-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }
      .degree-item {
        flex: 0 1 calc(33.33% - 20px);
        margin: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .experience-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }
      .experience-item {
        flex: 0 1 calc(33.33% - 20px);
        margin: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .card {
        padding: 20px;
        background-color: white;
      }
      #wrapper {
        display: flex;
        flex-wrap: wrap;
      }
      #hardskills {
        display: flex;
        padding-top: 50px;
        flex-wrap: wrap;
        float: left; /* add this */
        list-style-type: none;
        padding: 10;
        width: 40%;
      }
      #softskills {
        display: flex;
        padding-top: 50px;

        flex-wrap: wrap;
        float: left; /* add this */
        list-style-type: none;
        padding: 10;
        width: 40%;
      }
      ul {
        display: inline-block;
      }
    `,
  ],
})
export class ResumeComponent {
  degrees: Degree[];
  hardskills: HardSkills[];
  softskills: SoftSkills[];
  experiences: Experience[];

  constructor() {
    this.degrees = [
      {
        university: 'Bellevue University',
        location: 'Online',
        degree: 'Bachelor of Science',
        field: 'Web Development',
        graduation: 'December 2024',
      },
      {
        university: 'Florida Institute of Technology',
        location: 'Melbourne,FL and Online',
        degree: 'Master of Science',
        field: 'Computer Information Systems',
        graduation: 'December 2016',
      },
      {
        university: 'Youngstown State University',
        location: 'Youngstown, Oh',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        graduation: 'August, 1995',
      },
    ];

    this.hardskills = [
      {
        skill: 'JavaScript',
      },
      {
        skill: 'DevOps',
      },
      {
        skill: 'Agile Methodologies',
      },
      {
        skill: 'API Development',
      },
      {
        skill: 'Python',
      },
      {
        skill: 'MongoDB',
      },
      {
        skill: 'Angular',
      },
      {
        skill: 'TypeScript',
      },
    ];

    this.softskills = [
      {
        skill: 'Communication',
      },
      {
        skill: 'Problem Solving',
      },
      {
        skill: 'Emotional Intelligence',
      },
      {
        skill: 'Adaptability',
      },
      {
        skill: 'Creativity',
      },
      {
        skill: 'Problem Solving',
      },
      {
        skill: 'Patience',
      },
      {
        skill: 'Self Awareness',
      },
      {
        skill: 'Team work and collaboration',
      },
    ];

    this.experiences = [
      {
        employer: "Macy's",
        location: 'Towson, MD',
        title: 'Sales Support',
        description: ' ',
        dates: 'September 2022 - present',
      },
      {
        employer: 'Revature',
        location: 'Baltimore, MD',
        title: 'Software Engineer | ServiceNow Developer and Administrator',
        description: ' ',
        dates: 'October 2021 - September 2022',
      },
      {
        employer: 'TTEC',
        location: 'Youngstown, OH',
        title: 'Customer Service Support',
        description: ' ',
        dates: 'June 2020 -  September 2021',
      },
      {
        employer: "Macy's",
        location: 'Towson, MD',
        title: 'Sales Support',
        description: ' ',
        dates: '2018 -2019',
      },
      {
        employer: "Macy's",
        location: 'Aventura, Fl',
        title: 'Sales Support',
        description: ' ',
        dates: '2014 - 2018',
      },
      {
        employer: 'GlassHouse technologies',
        location: 'Burlington, NC',
        title: 'Sales Support',
        description: ' ',
        dates: '',
      },
      {
        employer: 'Labcorp',
        location: 'Burlington, NC',
        title: 'Sales Support',
        description: ' ',
        dates: '',
      },
      {
        employer: 'Glasshouse Technologies',
        location: 'Durham, NC',
        title: 'Sales Support',
        description: ' ',
        dates: '',
      },
      {
        employer: 'Raytheon',
        location: 'Falls Church, VA',
        title: 'Sales Support',
        description: ' ',
        dates: '',
      },
    ];
  }
}
