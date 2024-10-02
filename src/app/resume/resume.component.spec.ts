

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create resume', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display a list of degrees', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const degreeItems = compiled.querySelectorAll('.degree-item'); // Get all the player items
    expect(degreeItems.length).toEqual(component.degrees.length); // Check if the number of player items is equal to the number of items in the player array
  });

  it('should correctly display a list of experiences', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const experienceItems = compiled.querySelectorAll('.experience-item'); // Get all the player items
    expect(experienceItems.length).toEqual(component.experiences.length); // Check if the number of player items is equal to the number of items in the player array
  });

   //Test: characters in the newly created component are displaying correctly.
   it('should display details for hardskills list', () => {

    component.hardskills =  [{ skill: 'JavaScript' }];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(' #hardskills').textContent).toContain(
      'JavaScript');
    });

     //Test: characters in the newly created component are displaying correctly.
   it('should display details for softskills list', () => {

    component.softskills =  [{ skill: 'Communication' }];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(' #softskills').textContent).toContain(
      'Communication');
    });




});


