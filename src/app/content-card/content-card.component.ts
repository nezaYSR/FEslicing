import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent implements OnInit {
  contents: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.seeVideos();
  }

  seeVideos() {
    this.sharedService
      .getVideos()
      .toPromise()
      .then((data) => {
        for (let i in data) {
          this.contents.push(data[i]);
        }
      });
  }
}
