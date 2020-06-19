import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-nyhed',
  templateUrl: './nyhed.component.html',
  styleUrls: ['./nyhed.component.scss']
})
export class NyhedComponent implements OnInit {
  news: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    const newsId = this.route.snapshot.paramMap.get('id');
    this.http
    .get(`https://api.mediehuset.net/mediesuset/news/${newsId}`)
    .subscribe(data => {
      this.news = data;
      console.log(this.news)
    });
  }

}
