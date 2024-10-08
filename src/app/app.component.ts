import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <div class="wrapper">
  <header class="banner">
  <img src="/assets/BerniceHeroCloud.png" alt="website banner for portfolio" class="banner-img">
</header>
<main class="main-content">


<nav class="navbar">
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/resume">Resume</a></li>
    <li><a routerLink="/about">About</a></li>
    <li><a routerLink="/projects">Projects</a></li>
    <li><a routerLink="/certifications">Certifications</a></li>

  </ul>
</nav>
<section class="content">
  <router-outlet />
</section>
</main>

<footer class="footer">
<nav class="footer-nav">
<a routerLink="/">Home</a> |
<a routerLink="/resume">Resume</a> |
<a routerLink="/about">About</a> |
<a routerLink="/projects">Projects</a> |
<a routerLink="/certifications">Certifications</a> |
</nav>
<p>&copy; 2024 Bernice Templeman's Portfolio</p>
</footer>
</div>
`,
  styles: [
    `
`
  ]
})
export class AppComponent {
}
