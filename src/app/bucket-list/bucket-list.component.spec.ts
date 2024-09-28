import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListComponent } from './bucket-list.component';
import { CommonModule } from '@angular/common';
import { BucketList } from '../home/home.component';


describe('BucketListComponent', () => {
  let component: BucketListComponent;
  let fixture: ComponentFixture<BucketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucketListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucketListComponent);
    component = fixture.componentInstance;

    const mockOrder = {
      todos: [
        {  name: 'Software development work', description: '',  },
        {  name: '', description: '' },
      ],
    };

    component.bucketlist = mockOrder;

    fixture.detectChanges();
  });

  it('should create bucket list', () => {
    expect(component).toBeTruthy();
  });
});
