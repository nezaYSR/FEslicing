import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css'],
})
export class PeopleCardComponent implements OnInit {
  people: any[] = [];
  featured: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.seeVideos();
  }

  seeVideos() {
    this.sharedService
      .getVideos()
      .toPromise()
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          this.people.push(data[i]);
        }
      });
  }
}
