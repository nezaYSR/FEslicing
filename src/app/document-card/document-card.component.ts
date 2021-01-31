import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.css'],
})
export class DocumentCardComponent implements OnInit {
  docs: any[] = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.seeDocs();
  }

  seeDocs() {
    this.sharedService
      .getDocs()
      .toPromise()
      .then((data) => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
          this.docs.push(data[i]);
        }
      });
  }
}
