import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageHowWeWorkComponent } from './home-page-how-we-work.component';

describe('HomePageHowWeWorkComponent', () => {
  let component: HomePageHowWeWorkComponent;
  let fixture: ComponentFixture<HomePageHowWeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageHowWeWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageHowWeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
