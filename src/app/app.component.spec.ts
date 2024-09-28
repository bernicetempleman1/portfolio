import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ResumeComponent } from './resume/resume.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, Router } from '@angular/router';

describe('AppComponent (Standalone)', () => {
  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    const routes: Routes = [{ path: 'resume', component: ResumeComponent }]
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes), // Include RouterTestingModule to handle routing
        ResumeComponent,
      ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Directly create the component
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  /** Week 3: unit test 3 */
  it('should have correct route for Resume Component', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find((r) => r.path === 'resume');
    expect(route).toBeDefined(); // Check if the route is defined
    if (route) {
      expect(route.component).toBe(ResumeComponent); // Check if the component is PlayerComponent
    }
  });

});
