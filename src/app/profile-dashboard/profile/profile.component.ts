import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  constructor(public router : Router, private location : Location) {}

  ngOnInit() {}
  clickit(){
    this.router.navigate(['/myprofile'])
  }

  clickin(){
    this.router.navigate(['/overview'])
  }
  clickSettings(){
    this.router.navigate(['/settings'])
  }
  backClicked() {
    this.location.back();
  }

}
