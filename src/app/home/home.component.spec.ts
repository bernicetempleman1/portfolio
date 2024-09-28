import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create home', () => {
    expect(component).toBeTruthy();
  });

  /*
  it('should correctly display a list of players', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const playersItems = compiled.querySelectorAll('.players-item'); // Get all the player items
    expect(playersItems.length).toEqual(component.players.length); // Check if the number of player items is equal to the number of items in the player array
  });
  */

});
