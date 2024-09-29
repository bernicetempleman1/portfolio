import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <p>
      About Page: This page should include a short bio about you and an image.
      This is your chance to share a bit about who you are, your journey into
      development, and what you're passionate about.
    </p>
    <div id="wrapper">
      <!-- Use the header area for the website name or logo -->
      <header>
        <div class="tab-desk">
          <a href="index.html"
            ><img
              src="images/Bernicelargescreenhero.png"
              alt="Bernice Templeman"
          /></a>
        </div>
        <div class="mobile">
          <h1>&#128483; BioSite</h1>
          <h3>Bernice Templeman</h3>
        </div>
      </header>

      <!-- Use the nav area to add hyperlinks to other pages within the website-->
=

      <!-- Use the main area to add the main content to the webpage -->
      <main>
        <section class="grid2">
          <figure>
            <!-- Figure Element 1-->
            <img src="images/WIN_20201018_17_43_52_Pro.jpg" alt="Bernice" />
            <figcaption>
              <h2>Bernice’s Purpose, Vision, and Values</h2>

              <!-- Paragraph 1: Purpose-->
              <p>
                Purpose: To bring the best user experience to customers through
                cloud technology, software, and service that will improve the
                quality of life.
              </p>

              <!-- Paragraph 2: Vision-->
              <p>
                Vision: To make the best software in the cloud and improve the
                quality of life on earth.
              </p>

              <!-- Paragraph 3: Values-->
              <p>Values:</p>
              <ol>
                <li>Collaborative</li>
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Growth</li>
                <li>Service</li>
              </ol>
            </figcaption>
          </figure>

          <article>
            <div id="info">
              <h2>Tell me about yourself.</h2>

              <!-- 1st paragraph element: Use the first paragraph below to answer tell me about yourself -->
              <p>
                Thank you for asking. I am a collaborative and solution-driven
                software developer with over five years of experience working
                with engineers, developers, and programmers. I have a degree in
                Computer Science from Youngstown State University and a Master
                of Science in Computer Information Systems from the Florida
                Institute of Technology.
              </p>

              <p>
                I've already contributed to several projects and assisted with
                managing a project for one organization.
              </p>

              <p>
                Something I've enjoyed and have been able to use in my role as a
                developer is leveraging my experience in tech support and system
                administration to help identify and resolve complex issues.
              </p>

              <p>
                I worked on several projects using Java, JavaScript, HTML, C++,
                TypeScript, Visual Basic, MySQL, and Fortran.
              </p>

              <p>
                Since my latest role asked for Web Development, I signed up and
                started an online web development degree to increase my
                knowledge as quickly as possible.
              </p>

              <p>
                My experience has allowed me to sharpen my attention to detail
                and critical thinking skills and enhance my communication skills
                working on team-based projects and with clients.
              </p>

              <p>
                My latest technical role as a ServiceNow administrator and
                developer expanded my skills to a cloud platform to deliver
                client solutions.
              </p>

              <p>
                In my role in tech support, I received several commendations
                from customers where I could identify and resolve their
                technical issues with clarity and ease.
              </p>

              <p>
                I'm excited to collaborate on a team, apply my technical skills
                to develop applications and systems and contribute to your team
                in a way that positively impacts the organization and your
                clients.
              </p>

              <!-- 2nd paragraph element: Use the second paragraph below for the facility's membership hyperlink -->
              <p>
                Check out
                <a
                  class="link"
                  href="https://github.com/bernicetempleman1?tab=repositories"
                  target="_blank"
                  >Bernice Templeman's GitHub Repositories</a
                >.
              </p>
            </div>
          </article>
        </section>

        <section>
          <div id="list" class="mobile">
            <h2>Certifications</h2>

            <ol>
              <li>Certified Application Developer: December 01, 2022</li>
              <li>
                ServiceNow Certified System Administrator: December 03, 2022
              </li>
              <li>
                Certified Implementation Specialist in IT Service Management:
                December 03, 2022
              </li>
              <li>
                Certified Implementation Specialist in Human Resources: December
                03, 2022
              </li>
              <li>
                Certified Implementation Specialist in Event Management: January
                14, 2023
              </li>
              <li>
                Certified Application Specialist in Performance Analytics:
                January 14, 2023
              </li>
            </ol>
          </div>

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
                    knowledge to design, build, test, and implement an
                    application built on the ServiceNow platform.</q
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
                    >Demonstrates mastery of ServiceNow System Administration
                    and certifies that a candidate has the skills and essential
                    knowledge necessary to manage the configuration,
                    implementation, and maintenance of the ServiceNow
                    platform.</q
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
                <td>
                  Certified Implementation Specialist in IT Service Management
                </td>
                <td>ServiceNow</td>
                <td>December 03, 2022</td>
                <td>
                  <q
                    >Assures employees and peers that you possess the skills and
                    knowledge to quickly and successfully deploy ServiceNow ITSM
                    products into customer environments, whether you are a new
                    consultant starting your career or a seasoned
                    professional.</q
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
                    Management. The CIS-Event Management certification is
                    designed for IT Operations Management personnel and others
                    in a company who work with events and alerts as they pertain
                    to infrastructure equipment, and consultants who implement
                    and configure ServiceNow Cloud Management.</q
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
                <td>
                  Certified Application Specialist in Performance Analytics
                </td>
                <td>ServiceNow</td>
                <td>January 14, 2023</td>
                <td>
                  <q
                    >Certifies that a successful candidate has the skills and
                    essential knowledge to perform the configuration,
                    implementation, and maintenance of a ServiceNow Performance
                    Analytics solution.</q
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

            <p>
              <a
                class="link"
                href="https://partnerportal.service-now.com/partnerhome?id=verify_certificate"
                target="_blank"
                >ServiceNow Certification Verification</a
              >
            </p>
          </div>
        </section>

        <div id="contact">
          <!--  paragraph element: Use the paragraph below to advise on the next step. -->
          <p class="action">
            Did you find an opportunity? Contact me to see if I can help.
          </p>
          <p>
            <a href="mailto:bernice.templeman1@gmail.com" >bernice.templeman1g&#64;mail.com</a
            >
          </p>
        </div>
      </main>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {}
