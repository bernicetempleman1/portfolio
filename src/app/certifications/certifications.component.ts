import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tab-desk desktop" id="table">
      <table>
        <caption>
          Certifications
        </caption>
        <tr>
          <!-- Row 1 -->
          <th>Certification</th>
          <th>Issuing Organization</th>
          <th>Date</th>
          <th>Benefits</th>
        </tr>
        <tr>
          <!-- Row 2 -->
          <td>Certified Application Developer</td>
          <td>ServiceNow</td>
          <td>December 01, 2022</td>
          <td>
            <q
              >Assures employees and peers that you possess the skills and
              knowledge to design, build, test, and implement an application
              built on the ServiceNow platform.</q
            >
            <cite
              ><a
                class="link"
                href="https://nowlearning.servicenow.com/lxp/en/pages/now-learning-get-certified?achievement_id=548e1d77dbc27f40de3cdb85ca961949&id=amap_detail"
                target="_blank"
                >ServiceNow</a
              ></cite
            >
          </td>
        </tr>
        <tr>
          <!-- Row 3 -->
          <td>ServiceNow Certified System Administrator</td>
          <td>ServiceNow</td>
          <td>December 03, 2022</td>
          <td>
            <q
              >Demonstrates mastery of ServiceNow System Administration and
              certifies that a candidate has the skills and essential knowledge
              necessary to manage the configuration, implementation, and
              maintenance of the ServiceNow platform.</q
            >
            <cite
              ><a
                class="link"
                href="https://www.servicenow.com/services/training-and-certification/certified-system.html"
                target="_blank"
                >ServiceNow</a
              ></cite
            >
          </td>
        </tr>
        <tr>
          <!-- Row 4 -->
          <td>Certified Implementation Specialist in IT Service Management</td>
          <td>ServiceNow</td>
          <td>December 03, 2022</td>
          <td>
            <q
              >Assures employees and peers that you possess the skills and
              knowledge to quickly and successfully deploy ServiceNow ITSM
              products into customer environments, whether you are a new
              consultant starting your career or a seasoned professional.</q
            >
            <cite
              ><a
                class="link"
                href="https://nowlearning.servicenow.com/lxp/en/pages/now-learning-get-certified?achievement_id=6c8e1d77dbc27f40de3cdb85ca961970&id=amap_detail"
                target="_blank"
                >ServiceNow</a
              ></cite
            >
          </td>
        </tr>
        <tr>
          <!-- Row 5 -->
          <td>Certified Implementation Specialist in Human Resources</td>
          <td>ServiceNow</td>
          <td>December 03, 2022</td>
          <td>
            <q
              >Assures employees and peers that you possess the skills and
              knowledge to implement and administrate ServiceNow Human
              Resources."</q
            >
            <cite
              ><a
                class="link"
                href="https://nowlearning.servicenow.com/lxp/en/pages/now-learning-get-certified?achievement_id=1c8e1d77dbc27f40de3cdb85ca96194b&id=amap_detail"
                target="_blank"
                >ServiceNow</a
              ></cite
            >
          </td>
        </tr>
        <tr>
          <!-- Row 6 -->
          <td>Certified Implementation Specialist in Event Management</td>
          <td>ServiceNow</td>
          <td>January 14, 2023</td>
          <td>
            <q
              >Assures employees and peers that you possess the skills and
              knowledge to implement and administrate ServiceNow Event
              Management. The CIS-Event Management certification is designed for
              IT Operations Management personnel and others in a company who
              work with events and alerts as they pertain to infrastructure
              equipment, and consultants who implement and configure ServiceNow
              Cloud Management.</q
            >
            <cite
              ><a
                class="link"
                href="https://nowlearning.servicenow.com/lxp/en/pages/now-learning-get-certified?achievement_id=108e1d77dbc27f40de3cdb85ca96192e&id=amap_detail"
                target="_blank"
                >ServiceNow</a
              ></cite
            >
          </td>
        </tr>
        <tr>
          <!-- Row 7 -->
          <td>Certified Application Specialist in Performance Analytics</td>
          <td>ServiceNow</td>
          <td>January 14, 2023</td>
          <td>
            <q
              >Certifies that a successful candidate has the skills and
              essential knowledge to perform the configuration, implementation,
              and maintenance of a ServiceNow Performance Analytics solution.</q
            >
            <cite
              ><a
                class="link"
                href="https://www.servicenow.com/services/training-and-certification/certified-application.html"
                target="_blank"
                >ServiceNow</a
              ></cite
            >
          </td>
        </tr>
      </table>

      <div id="verify">
      <h2>Certification Verification</h2>


        <button
          onclick="window.open('https://partnerportal.service-now.com/partnerhome?id=verify_certificate')"
        >
          Certification Verification
        </button>
      </div>
    </div>
  `,
  styles: [
    `
    #verify {
      text-align: center;
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
    `,
  ],
})
export class CertificationsComponent {}
