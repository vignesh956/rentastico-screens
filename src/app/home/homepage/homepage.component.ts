import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from 'src/app/datashare.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent  implements OnInit {
  whereToGo: string="";
  fromDate: string="";
  toDate: string="";
  numberOfPeople: string="";

  constructor(public router:Router, public sharedDataService:DatashareService) { }
  minDate: string=""; // Adjust the type as per your requirement
  maxDate: string="";
  ngOnInit() {}
 
  images:any=[{src:"assets/familyimage.jpg",title:"Divine Ganga...",Data:"12 July 2016"},{src:"assets/girlimg.jpg",title:"Divine Ganga...",Data:"12 July 2016"}]
  search(){
    this.router.navigate(['/rentastico'])
    this.sharedDataService.setData('whereToGo', this.whereToGo);
    this.sharedDataService.setData('fromDate', this.fromDate);
    this.sharedDataService.setData('toDate', this.toDate);
    this.sharedDataService.setData('numberOfPeople', this.numberOfPeople);
    console.log(this.whereToGo)
  }
  iconName: string = 'chevron-forward-outline';
  isRow1Visible: boolean = true;
 toggleIcons(): void {
    this.isRow1Visible = !this.isRow1Visible;
    this.iconName = this.isRow1Visible ? 'chevron-forward-outline' : 'chevron-back-outline';
  }
  selectedSegment: string = 'home'; // Default segment value

  segmentChanged(event:any) {
    this.selectedSegment = event.detail.value;
  }
  

  
  isFlexibleActive: boolean = true;

  toggleFlexibility(isFlexible: boolean): void {
    this.isFlexibleActive = isFlexible;
  }
  
  segment: string = 'home'; 

  selectSegment(segment: string) {
    this.segment = segment;
    
  } 
}

  
