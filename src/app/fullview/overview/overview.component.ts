import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent  implements OnInit {
  text = [
    {
      name:"Instant Book Available",
      details :"Yes"
    },
    {
      name:"Property Area",
      details: "1000 sq.ft"

    },
    {
      name:"Location Type",
      details: "Downtown"

    },
    {
      name:"Guests Check in/Out Time",
      details: "12PM/10AM"

    },
    {
      name:"Cancellation Policy",
      details: "Moderate"

    },
    {
      name:"Minimum Stay",
      details: "2 Days"

    },
    {
      name:"Maximum Stay",
      details: "10 Days"

    },
    {
      name:"Instant Book Available",
      details :"Yes"
    },
    {
      name:"Property Area",
      details: "1000 sq.ft"

    },
    {
      name:"Location Type",
      details: "Downtown"

    },
    {
      name:"Guests Check in/Out Time",
      details: "12PM/10AM"

    },
    {
      name:"Cancellation Policy",
      details: "Moderate"

    },
    {
      name:"Minimum Stay",
      details: "2 Days"

    },
    {
      name:"Maximum Stay",
      details: "10 Days"

    }
 ]
  constructor() { }

  ngOnInit() {}

}
