import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageKeyFeaturesComponent } from './home-page-key-features.component';

describe('HomePageKeyFeaturesComponent', () => {
  let component: HomePageKeyFeaturesComponent;
  let fixture: ComponentFixture<HomePageKeyFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageKeyFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageKeyFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
