import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllUserComponent } from './find-all-user.component';

describe('FindAllUserComponent', () => {
  let component: FindAllUserComponent;
  let fixture: ComponentFixture<FindAllUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
