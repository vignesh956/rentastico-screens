import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent  implements OnInit {
  overviewList = [
    { name: "Overview", clicked: false, },
    { name: "availability", clicked: false },
    { name: "Amenities & Experience", clicked: false },
    { name: "Reviews", clicked: false },
    { name: "location", clicked: false },
    { name: "Host Tv", clicked: false }
  ]

  toggleClicked(index: number) {
    this.overviewList.forEach((item, i) => {
      item.clicked = i === index ? !item.clicked : false;
    });
  }

  ratings = [
    { rating: 5, name: 'Communication' },
    { rating: 4, name: 'Cleanliness' },
    { rating: 3, name: 'Accuracy' },
    { rating: 2, name: 'Check-In' },
    { rating: 1, name: 'Location' },

  ];

  ratingWidth(rating: number): any {
    const maxWidth = 100;
    const percentage = (rating / 5) * 100;
    return percentage + '%';
  }


  cards = [
    {
      src: "assets/review/image1.jpeg",
      name: "Kumar Varma",
      date: "October 23",
      stars: ["star", "star", "star", "star", "star-half"],
      review: "Aloha is a brilliant property at a great location with amazing views. The highlight of our stay was the food - which I would rate as one of the best."
    },
    {
      src: "assets/review/image2.jpeg",
      name: "Kumar Varma",
      date: "October 23",
      stars: ["star", "star", "star", "star", "star-half"],
      review: "Aloha is a brilliant property at a great location with amazing views. The highlight of our stay was the food - which I would rate as one of the best."
    },
    {
      src: "assets/review/image3.jpeg",
      name: "Kumar Varma",
      date: "October 23",
      stars: ["star", "star", "star", "star", "star-half"],
      review: "Aloha is a brilliant property at a great location with amazing views. The highlight of our stay was the food - which I would rate as one of the best."
    },
    {
      src: "assets/review/image4.jpeg",
      name: "Kumar Varma",
      date: "October 23",
      stars: ["star", "star", "star", "star", "star-half"],
      review: "Aloha is a brilliant property at a great location with amazing views. The highlight of our stay was the food - which I would rate as one of the best."
    },
  ];
  constructor() { }

  ngOnInit() {}

}
