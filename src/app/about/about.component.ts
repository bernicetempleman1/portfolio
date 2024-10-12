import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <h1></h1>

    <div id="wrapper">
      <!-- Use the main area to add the main content to the webpage -->
      <main>
        <section class="grid2">
          <div class="container">
            <div class="image">
              <img
                style="vertical-align:middle"
                src="assets/Bernice1.jpg"
                alt="Bernice"
              />
            </div>
            <div class="text">
              <h2>About Me</h2>

              <p>
                This page includes a short bio and an image. I share a bit about
                who I am, my journey into development, and what I'm passionate
                about.
              </p>
            </div>
          </div>

          <!-- Paragraph 1: Purpose-->
          <h2>Bernice’s Purpose, Vision, and Values</h2>
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

        <div id="contact">
          <!--  paragraph element: Use the paragraph below to advise on the next step. -->
          <p class="action">
            Did you find an opportunity? Contact me to see if I can help.
          </p>
          <p>
            <a href="mailto:bernice.templeman1@gmail.com"
              >bernice.templeman1g&#64;mail.com</a
            >
          </p>
        </div>
      </main>
    </div>
  `,
  styles: `
  .container {
        display: flex;
        align-items: center;
        justify-content: center
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

  `,
})
export class AboutComponent {}
