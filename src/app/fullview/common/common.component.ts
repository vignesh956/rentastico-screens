import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent  implements OnInit {
  backimage = {
    src: 'assets/villa1.jpeg', alt: 'Image 1' 
 }
  images:any  = [
    { src: 'assets/overview/image1.jpeg', alt: 'Image 1' },
    { src: 'assets/overview/image2.jpeg', alt: 'Image 2' },
    { src: 'assets/overview/image3.jpeg', alt: 'Image 3' },
    { src: 'assets/overview/image4.jpeg', alt: 'Image 4' },
    { src: 'assets/overview/image5.jpeg', alt: 'Image 5' },
    { src: 'assets/overview/image1.jpeg', alt: 'Image 6' },
    { src: 'assets/overview/image2.jpeg', alt: 'Image 7' }

  ];

  

  showOverview = true;
  showAvailability = false;
  showAmenities = false;
  showReviews = false;
  showLocation = false;
  showHostTv = false;

  toggleSection(section: string) {
    this.showOverview = false;
    this.showAvailability = false;
    this.showAmenities = false;
    this.showReviews = false;
    this.showLocation = false;
    this.showHostTv = false;

    switch (section) {
      case 'overview':
        this.showOverview = true;
        break;
      case 'availability':
        this.showAvailability = true;
        break;
      case 'amenities':
        this.showAmenities = true;
        break;
      case 'reviews':
        this.showReviews = true;
        break;
      case 'location':
        this.showLocation = true;
        break;
      case 'hostTv':
        this.showHostTv = true;
        break;
      default:
        break;
    }
  }
  constructor() { }

  ngOnInit() {}

}
