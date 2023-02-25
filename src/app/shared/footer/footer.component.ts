import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public footer_information = {
    "address": "804, Tower 04, AVL36GURGAON, Sector 36D, Gurugram, Haryana 122004",
    "email": "contact@indiainfosystem.com",
    "contact": "(+91-124) 411 2636",
    "social_media_icon": [
      { "id": 1, label: "facebook", "link": "https://www.facebook.com", "class": "fa-brands fa-square-facebook"},
      { "id": 2, label: "google", "link": "https://www.google.com", "class": "fa-brands fa-square-google-plus"},
      { "id": 3, label: "twitter", "link": "https://www.twitter.com", "class": "fa-brands fa-square-twitter"},
      { "id": 4, label: "instagram", "link": "https://www.instagram.com", "class": "fa-brands fa-square-instagram"}
    ],
    "site_link": [
        { "id": 1, "label": "Home", "url": "home", "hasChild": [] },
        { "id": 1, "label": "About Us", "url": "about-us", "hasChild": [] },
        { "id": 1, "label": "Services", "url": "services", "hasChild": [] },
        { "id": 1, "label": "Company", "url": "company", "hasChild": [] },
        { "id": 1, "label": "Blog", "url": "blog", "hasChild": [] },
        { "id": 1, "label": "Contact Us", "url": "contact-us", "hasChild": [] }
      ]
}
}
