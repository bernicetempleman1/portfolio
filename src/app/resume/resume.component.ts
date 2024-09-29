import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Resume Page: This page should include a detailed resume that outlines your education, skills, experience, and any relevant certifications or awards.
      You should also provide a link to download your resume as a PDF or other document format.

      Detailed resume (education, skills, experience, certifications, awards).
      Link to download the resume as a PDF or other document format.
    </p>

    <h2>Education</h2>

    <h2>Skills</h2>

    <h2>Experience</h2>


    <h2>Certifications</h2>




  `,
  styles: ``
})
export class ResumeComponent {

}
