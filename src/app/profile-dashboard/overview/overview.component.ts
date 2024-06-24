import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent  implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {}

  backclicked(){
    this.location.back()
  }
}
