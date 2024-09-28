import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListComponent } from './bucket-list.component';
import { CommonModule } from '@angular/common';
import { Home } from '../home/home.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
