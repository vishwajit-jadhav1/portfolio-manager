import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateUserModalComponent } from './add-update-user-modal.component';

describe('AddUpdateUserModalComponent', () => {
  let component: AddUpdateUserModalComponent;
  let fixture: ComponentFixture<AddUpdateUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateUserModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
