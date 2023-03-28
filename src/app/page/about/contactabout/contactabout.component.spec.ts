import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaboutComponent } from './contactabout.component';

describe('ContactaboutComponent', () => {
  let component: ContactaboutComponent;
  let fixture: ComponentFixture<ContactaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
