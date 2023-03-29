import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerdetailproComponent } from './bannerdetailpro.component';

describe('BannerdetailproComponent', () => {
  let component: BannerdetailproComponent;
  let fixture: ComponentFixture<BannerdetailproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerdetailproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerdetailproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
