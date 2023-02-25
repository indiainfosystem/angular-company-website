import { Component, Input } from '@angular/core';
import { HomePageBanner } from 'src/app/shared/models/home-page-banner.model';

@Component({
  selector: 'app-home-page-banner',
  templateUrl: './home-page-banner.component.html',
  styleUrls: ['./home-page-banner.component.css']
})
export class HomePageBannerComponent {
@Input() bannerData: HomePageBanner = {}
}
