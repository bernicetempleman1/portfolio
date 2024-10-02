import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create projects', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Unit test 2
   */
  it('should correctly display a list of projects', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const projectItems = compiled.querySelectorAll('.projects-item'); // Get all the player items
    expect(projectItems.length).toEqual(component.projects.length); // Check if the number of player items is equal to the number of items in the player array
  });
});
