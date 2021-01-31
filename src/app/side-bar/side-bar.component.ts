import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  activityHead: any;
  activities: any[] = [];
  channels: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // this.getHead();
    this.lastActivity();
    this.getChannels();
  }

  // getHead() {
  //   this.sharedService
  //     .getHeader()
  //     .toPromise()
  //     .then((data) => {
  //       console.log(data[0].Activity.headerTitle);
  //       this.activityHead = data[0].Activity.headerTitle;;
  //     });
  // }

  lastActivity() {
    this.sharedService
      .getLastActivity()
      .toPromise()
      .then((data) => {
        for (let i in data) {
          this.activities.push(data[i]);
        }
      });
  }

  getChannels() {
    this.sharedService
      .getChannels()
      .toPromise()
      .then((data) => {
        for (let i in data) {
          this.channels.push(data[i]);
        }
      });
  }
}
