import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Bernice Templeman Portfolio</h1>
      <h2></h2>
      <p>brief introduction to who you are,
      a bucket list of things you want to do,
      and navigation links to the other pages in your site.

      </p>
      <p>


      </p>
      <div class="highlights-container">
        <div class="highlight">
          <img
            src="/assets/Map.png"
            alt="image of evergreen trees"
          />
          <p>

          </p>
        </div>
        <div class="highlight">
          <img
            src="/assets/House.png"
            alt="image of a house"
          />
          <!-- -->
          <p>

          </p>
        </div>
        <div class="highlight">
          <img
            src="/assets/Bernice.jpg"
            alt="image of Bernice"
          />
          <p>

          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
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
})
export class HomeComponent {}
