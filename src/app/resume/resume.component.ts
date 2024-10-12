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
    <h1>Resume</h1>

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

      <h2>Skills</h2>

      <table>
        <tr>
          <th>Hard Skills</th>
          <th>Soft Skills</th>
        </tr>

        <tr>
          <td>JavaScript</td>
          <td>Communication</td>
        </tr>

        <tr>
          <td>DevOps</td>
          <td>Emotional Intelligence</td>
        </tr>
        <tr>
          <td>Agile Methodologies</td>
          <td>Adaptability</td>
        </tr>
        <tr>
          <td>API Development</td>
          <td>Creativity</td>
        </tr>
        <tr>
          <td>Python</td>
          <td>Problem Solving</td>
        </tr>
        <tr>
          <td>MongoDB</td>
          <td>Patience</td>
        </tr>
        <tr>
          <td>Angular</td>
          <td>Self Awareness</td>
        </tr>
        <tr>
          <td>TypeScript</td>
          <td>Team work and collaboration</td>
        </tr>
      </table>


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
      <div id="certifications">
        <h2>Certifications</h2>

        <table>
          <tr>
            <td>Certified Application Developer</td>
          </tr>
          <tr>
            <td>
              Certified Implementation Specialist in IT Service Management
            </td>
          </tr>
          <tr>
            <td>Certified Implementation Specialist in Human Resources</td>
          </tr>
          <tr>
            <td>Certified Implementation Specialist in Event Management</td>
          </tr>
          <tr>
            <td>Certified Application Specialist in Performance Analytics</td>
          </tr>
          <tr>
            <td>ServiceNow Certified System Administrator</td>
          </tr>
        </table>
      </div>

      <div>
        <h2>Download My Resume</h2>

        <div id="download">
          <button
            onclick="window.open('https://drive.google.com/file/d/1XnJwTrCZN8uItGYQ5AMNbhJZsAMf9iFp/view?usp=drive_link')"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      h1,
      h2,
      #download {
        text-align: center;
      }
      .degree-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }
      .degree-item {
        flex: 0 1 calc(33.33% - 20px);
        margin: 10px;
        box-shadow: 0 4px 8px navy;
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
        box-shadow: 0 4px 8px navy;
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
        padding-top: 10px;
        flex-wrap: wrap;
        float: left; /* add this */
        list-style-type: none;
        padding: 10;
        width: 40%;
      }
      #softskills {
        display: flex;
        padding-top: 10px;
        flex-wrap: wrap;
        float: left; /* add this */
        list-style-type: none;
        padding: 10;
        width: 40%;
      }
      ul {
        display: inline-block;
      }
      button {
        display: inline-block;
        margin: 0 auto;
        background-color: #008cba;
        color: white;
        padding: 15px 32px;
        font-size: 16px;
      }
      button:hover {
        background-color: #04aa6d; /* Green */
        color: white;
      }
      table {
        margin-left: auto;
        margin-right: auto;
      }
      table,
      th,
      td {
        border: 1px solid navy;
      }
      th,
      td {
        padding: 15px;
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
        description:
          ' Customer Service,Front of House Support, Administrative Support Team,  At Your Service, Online order fulfillment, Receiving Support',
        dates: 'September 2022 - present',
      },
      {
        employer: 'Revature',
        location: 'Baltimore, MD',
        title: 'Software Engineer | ServiceNow Developer and Administrator',
        description:
          ' Assisted the ServiceNow team in daily platform administration tasks, including user management, access control, and system maintenance.',
        dates: 'October 2021 - September 2022',
      },
      {
        employer: 'TTEC',
        location: 'Youngstown, OH',
        title: 'Customer Service Support',
        description:
          'Serves customers by providing product and service information and resolving product and service problems.',
        dates: 'June 2020 -  September 2021',
      },
      {
        employer: "Macy's",
        location: 'Towson, MD',
        title: 'Sales Support',
        description:
          ' Interacted with customers to provide assistance, resolve inquiries, and address concerns, ensuring a positive and memorable shopping experience.',
        dates: '2018 -2019',
      },
      {
        employer: "Macy's",
        location: 'Aventura, Fl',
        title: 'Sales Support',
        description:
          'Met and connected with customers, asked questions, listened, and advised to meet their needs',
        dates: '2014 - 2018',
      },
      {
        employer: 'GlassHouse Technologies',
        location: 'Burlington, NC',
        title: 'Sales Support',
        description:
          ' Performed troubleshooting on System Hardware, Software, Network, Installation and Configuration',
        dates: '2007-2009',
      },
      {
        employer: 'Labcorp',
        location: 'Burlington, NC',
        title: 'Sales Support',
        description:
          ' Monitored and supported over 200 Linux servers responsible for lab testing, Internet/Intranet, Financial and Clinical Trial departments',
        dates: '2004-2007',
      },
      {
        employer: 'Glasshouse Technologies',
        location: 'Durham, NC',
        title: 'Sales Support',
        description:
          ' Addressed customer technical issues through the use of technical expertise, knowledge base and tools',
        dates: '2000-2004',
      },
      {
        employer: 'Raytheon',
        location: 'Falls Church, VA',
        title: 'Sales Support',
        description:
          'Worked in a small team environment developing and testing software for a Dynamic Airspace Management System (DAMS)',
        dates: '1997-2000',
      },
    ];
  }
}
