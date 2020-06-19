import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from  '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { element } from 'protractor';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LineupComponent implements OnInit {
  events: any;
  color: any;
  sortet: any;
  constructor(private router: Router, private http: HttpClient) { }
  filter: number = 0;
  ngOnInit(): void {
     this.http
    .get(`https://api.mediehuset.net/mediesuset/events`)
    .subscribe(data => {
      this.events = data;
      this.sortet = data;
      console.log(this.events)
    });
  }
  goToArtistPage(artistId){
    this.router.navigate(['/artist', artistId]);
  }
  setUserColor(id) {
    switch (id) {
      case '1':
        return '#A33A49';
      case '2':
        return '#396999';
      case '3':
        return '#6B8846';
      case '4':
        return '#80347C';
    }
  }
  sortBy(prop: string) {
    return this.sortet.items.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
  filterContent(value) {
    this.filter = value;
    console.log(this.filter)
  }
}
