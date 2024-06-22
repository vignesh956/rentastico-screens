  import { Component, OnInit } from '@angular/core';
  import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/angular';
  import { from } from 'rxjs';
  import { Location } from '@angular/common';
  import { ActivatedRoute, Router } from '@angular/router';
  import { DatashareService } from '../datashare.service';
  @Component({
    selector: 'app-rentastico-client-app-home',
    templateUrl: './rentastico-client-app-home.component.html',
    styleUrls: ['./rentastico-client-app-home.component.scss'],
  })
  export class RentasticoClientAppHomeComponent  implements OnInit {
    whereToGo: string = '';
    fromDate: any = '';
    toDate: any = '';
    numberOfPeople: number = 0;
      selectedTab: string = 'drive-stay'; 



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
    constructor(public location:Location,public sharedDataService:DatashareService,public router:Router) { }

    backClick(){
      this.location.back();
    }

    ngOnInit() {
      
      this.whereToGo = this.sharedDataService.getData('whereToGo');
      this.fromDate = this.sharedDataService.getData('fromDate');
      this.toDate = this.sharedDataService.getData('toDate');
      this.numberOfPeople = this.sharedDataService.getData('numberOfPeople');
      console.log(this.whereToGo)
      console.log(this.fromDate)
      console.log(this.toDate)
      console.log(this.numberOfPeople)
    }
    fullview(){
      this.router.navigate(['home/fullview'])
    }
    
    isFlexibleActive: boolean = true;
    selectedSegment: string = 'home'; 

    segmentChanged(event:any) {
      this.selectedSegment = event.detail.value;
    }
    

    
  
    toggleFlexibility(isFlexible: boolean): void {
      this.isFlexibleActive = isFlexible;
    }
    
    segment: string = 'home'; 

    selectSegment(segment: string) {
      this.segment = segment;
      
    } 
    
  selectTab(tab: string) {
    this.selectedTab = tab; 
  }
  }
