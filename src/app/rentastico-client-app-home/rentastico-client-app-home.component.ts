import { Component, OnInit } from '@angular/core';
import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/angular';
import { from } from 'rxjs';
@Component({
  selector: 'app-rentastico-client-app-home',
  templateUrl: './rentastico-client-app-home.component.html',
  styleUrls: ['./rentastico-client-app-home.component.scss'],
})
export class RentasticoClientAppHomeComponent  implements OnInit {
  images=[
    {
      src:"assets/house4.jpg",
    },
    {
      src:"assets/house1.jpg",
    },
    {
      src:"assets/house2.jpg",
    },
    {
      src:"assets/house3.jpg",
    },
    {
      src:"assets/house4.jpg",
    }

   ]
  constructor() { }

  ngOnInit() {}

}
