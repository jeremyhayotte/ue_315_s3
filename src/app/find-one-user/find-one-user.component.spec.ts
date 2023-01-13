import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOneUserComponent } from './find-one-user.component';

describe('FindOneUserComponent', () => {
  let component: FindOneUserComponent;
  let fixture: ComponentFixture<FindOneUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindOneUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindOneUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
