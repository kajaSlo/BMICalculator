import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWhichCheckedTheirBMIsComponent } from './users-which-checked-their-bmis.component';

describe('UsersWhichCheckedTheirBMIsComponent', () => {
  let component: UsersWhichCheckedTheirBMIsComponent;
  let fixture: ComponentFixture<UsersWhichCheckedTheirBMIsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersWhichCheckedTheirBMIsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersWhichCheckedTheirBMIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
