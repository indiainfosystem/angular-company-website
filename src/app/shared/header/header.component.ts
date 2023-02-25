import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isOpen:Boolean = false;
  public navList: NavModel[] = [
    { id: 1, label: 'Home', url: 'home', hasChild: [] },
    { id: 1, label: 'About Us', url: 'about-us', hasChild: [] },
    { id: 1, label: 'Services', url: 'services', hasChild: [] },
    { id: 1, label: 'Company', url: 'company', hasChild: [] },
    { id: 1, label: 'Blog', url: 'blog', hasChild: [] },
    { id: 1, label: 'Contact Us', url: 'contact-us', hasChild: [] }
  ];
  constructor() {

  }
  showMobileMenu(event:Boolean){
    this.isOpen = event;
  }
}

export interface NavModel {
  id?: Number
  label?: String
  url?: any
  hasChild: NavModel[] 
}