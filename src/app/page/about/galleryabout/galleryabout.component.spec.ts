import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryaboutComponent } from './galleryabout.component';

describe('GalleryaboutComponent', () => {
  let component: GalleryaboutComponent;
  let fixture: ComponentFixture<GalleryaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
