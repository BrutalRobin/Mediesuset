import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss']
})
export class ForsideComponent implements OnInit {
  news: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .get(`https://api.mediehuset.net/mediesuset/news`)
    .subscribe(data => {
      this.news = data;
      console.log(this.news)
    });

}
goToNewsPage(newsId){
  this.router.navigate(['/nyhed', newsId]);
}
}
