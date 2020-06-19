import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    const artistId = this.route.snapshot.paramMap.get('id');
    this.http
    .get(`https://api.mediehuset.net/mediesuset/events/${artistId}`)
    .subscribe(data => {
      this.artist = data;
      console.log(this.artist)
    });
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

}
