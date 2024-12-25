import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListComponent } from './bucket-list.component';
import { CommonModule } from '@angular/common';
import { BucketList } from '../home/home.component';
import { HomeComponent } from '../home/home.component';

describe('BucketListComponent', () => {
  let component: BucketListComponent;
  let fixture: ComponentFixture<BucketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucketListComponent, CommonModule, HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BucketListComponent);
    component = fixture.componentInstance;

    const mockOrder = {
      todos: [
        { name: 'Software development work', description: '' },
        { name: '', description: '' },
      ],
    };

    component.bucketlist = mockOrder;

    fixture.detectChanges();
  });

  it('should create bucket list', () => {
    expect(component).toBeTruthy();
  });

  //Test 1: characters in the newly created component are displaying correctly.
  it('should display details for each to do in the bucketlist', () => {
    component.bucketlist = {
      todos: [{ name: 'Software Developer', description: 'Happy' }],
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain(
      'Software Developer'
    );
  });

  //Test 4: should display a message for an empty character list
  it('should display message for empty bucket list', () => {
    component.bucketlist = { todos: [] };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'No todos have been created yet'
    );
  });
});
