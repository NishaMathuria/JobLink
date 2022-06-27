import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamMemberPageComponent } from './add-team-member-page.component';

describe('AddTeamMemberPageComponent', () => {
  let component: AddTeamMemberPageComponent;
  let fixture: ComponentFixture<AddTeamMemberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamMemberPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamMemberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
