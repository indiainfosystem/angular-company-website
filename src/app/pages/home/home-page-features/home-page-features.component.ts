import { Component, Input } from '@angular/core';
import { HomeFeatures } from 'src/app/shared/models/home-page.model';

@Component({
  selector: 'app-home-page-features',
  templateUrl: './home-page-features.component.html',
  styleUrls: ['./home-page-features.component.css']
})
export class HomePageFeaturesComponent {
@Input() home_features: HomeFeatures = {}
}
