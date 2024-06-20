import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
})
export class MyprofileComponent  implements OnInit {

  constructor(private location : Location) { }

  ngOnInit() {}
  backClicked(){
    this.location.back();
  }

}
