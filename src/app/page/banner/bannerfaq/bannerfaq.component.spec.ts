import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerfaqComponent } from './bannerfaq.component';

describe('BannerfaqComponent', () => {
  let component: BannerfaqComponent;
  let fixture: ComponentFixture<BannerfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerfaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
