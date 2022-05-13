import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  detail;
  title;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.detail = this.route.snapshot.paramMap.get('detail');
    console.log(this.detail);
    this.getContent(this.detail);
    // switch()
  }

  getContent(detail: string) {
    switch (detail) {
      case 'tos': this.title="Terms Of Services";
        break;
      case 'pp':this.title="Privacy Policy";
        break;
      case 'osl':this.title="Open Source Libraries";
        break;
      case 'lar':this.title="Licenses and Registrations";
        break;
      case 'dev': this.title='Developer'
      default: 
        break;
    }
  }
}
