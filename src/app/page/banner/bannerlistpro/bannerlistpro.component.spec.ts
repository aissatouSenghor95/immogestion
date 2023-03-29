import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerlistproComponent } from './bannerlistpro.component';

describe('BannerlistproComponent', () => {
  let component: BannerlistproComponent;
  let fixture: ComponentFixture<BannerlistproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerlistproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerlistproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
