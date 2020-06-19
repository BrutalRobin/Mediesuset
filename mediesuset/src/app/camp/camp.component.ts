import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {
  camp: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    const campId = this.route.snapshot.paramMap.get('id');
    this.http
    .get(`https://api.mediehuset.net/mediesuset/camps/${campId}`)
    .subscribe(data => {
      this.camp = data;
      console.log(this.camp)
    });
  }

}
