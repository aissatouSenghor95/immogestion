import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CequenousfaisonsComponent } from './cequenousfaisons.component';

describe('CequenousfaisonsComponent', () => {
  let component: CequenousfaisonsComponent;
  let fixture: ComponentFixture<CequenousfaisonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CequenousfaisonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CequenousfaisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
