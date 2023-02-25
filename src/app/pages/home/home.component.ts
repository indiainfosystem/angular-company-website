import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Features, HomeFeatures, HomePageData } from 'src/app/shared/models/home-page.model';
import { Observable } from 'rxjs';
import { HowWeWork } from 'src/app/shared/models/how-we-work.model';
import { HomePageBanner } from 'src/app/shared/models/home-page-banner.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // public homePageData: HomePageData;
  public features: HomePageData = {};
  public howWeWork: HowWeWork = {}
  public homePageBanner: HomePageBanner = {}
  public homeFeatures: HomeFeatures = {}
  constructor(public _http: HttpClient){
  this.getHomePagedata().subscribe(data => {
    console.log('data::', data);
    this.features = data['features'];
    this.howWeWork = data['how-we-work'];
    this.homePageBanner = data['home-page-banner'];
    this.homeFeatures = data['home-feature'];
  });
  }

  getHomePagedata(): Observable<any>{
    return this._http.get('./assets/mocks/home-page.json');
  }
}
