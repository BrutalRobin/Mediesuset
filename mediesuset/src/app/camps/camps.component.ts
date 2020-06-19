import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.scss']
})
export class CampsComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  camps: any;
  ngOnInit(): void {
    this.http
    .get(`https://api.mediehuset.net/mediesuset/camps`)
    .subscribe(data => {
      this.camps = data;
      console.log(this.camps)
    });

}
goToCampPage(campId){
  this.router.navigate(['/camp', campId]);
}

}
