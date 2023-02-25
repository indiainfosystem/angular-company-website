import { Component, Input } from '@angular/core';
import { HowWeWork } from 'src/app/shared/models/how-we-work.model';

@Component({
  selector: 'app-home-page-how-we-work',
  templateUrl: './home-page-how-we-work.component.html',
  styleUrls: ['./home-page-how-we-work.component.css']
})
export class HomePageHowWeWorkComponent {
@Input() data: HowWeWork = {};
}
