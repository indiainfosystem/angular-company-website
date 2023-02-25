import { Component, Input } from '@angular/core';
import { Features, HomePageData } from 'src/app/shared/models/home-page.model';

@Component({
  selector: 'app-home-page-key-features',
  templateUrl: './home-page-key-features.component.html',
  styleUrls: ['./home-page-key-features.component.css']
})
export class HomePageKeyFeaturesComponent {
@Input() features: HomePageData = {};
constructor(){

}
}
