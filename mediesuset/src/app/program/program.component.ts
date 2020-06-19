import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from  '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  events: any;
  color: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http
   .get(`https://api.mediehuset.net/mediesuset/events`)
   .subscribe(data => {
     this.events = data;
   });

 }
 getCookie(name: string): string {
  const nameLenPlus = (name.length + 1);
  return document.cookie
    .split(';')
    .map(c => c.trim())
    .filter(cookie => {
      return cookie.substring(0, nameLenPlus) === `${name}=`;
    })
    .map(cookie => {
      return decodeURIComponent(cookie.substring(nameLenPlus));
    })[0] || null;
}
AddTo(id) {
  const token = this.getCookie('token');
  const user_id = this.getCookie('user_id');

  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const formData: any = new FormData();
  formData.append('user_id', user_id);
  formData.append('event_id', id);
  console.dir(formData);
  console.log(user_id)
  console.log(id)

  this.http.post('https://api.mediehuset.net/mediesuset/programme', formData, { headers }).subscribe(
    (response: any) => {
      console.log(response.access_token);
      if (response.access_token) {
        return true;
      } else {
        return;
      }
    },
    error => console.log
  );
}
 ngAfterViewInit(): void {
  var show1: any = document.getElementsByClassName("ons1");
  for (let item of show1) {
      console.log(item.id);
      item.style.display = 'grid';
  }
  var show2: any = document.getElementsByClassName("ons2");
  for (let item of show2) {
      console.log(item.id);
      item.style.display = 'grid';
  }
  var show3: any = document.getElementsByClassName("ons3");
  for (let item of show3) {
      console.log(item.id);
      item.style.display = 'grid';
  }
  var show4: any = document.getElementsByClassName("ons4");
  for (let item of show4) {
      console.log(item.id);
      item.style.display = 'grid';
  }
 }
 goToArtistPage(artistId){
   this.router.navigate(['/artist', artistId]);
 }
 filterDay(value1, value2, value3, value4,){
  var hide1: any = document.getElementsByClassName("ons1");
  for (let item of hide1) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide2: any = document.getElementsByClassName("ons2");
  for (let item of hide2) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide3: any = document.getElementsByClassName("ons3");
  for (let item of hide3) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide4: any = document.getElementsByClassName("ons4");
  for (let item of hide4) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide1: any = document.getElementsByClassName("tors1");
  for (let item of hide1) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide2: any = document.getElementsByClassName("tors2");
  for (let item of hide2) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide3: any = document.getElementsByClassName("tors3");
  for (let item of hide3) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide4: any = document.getElementsByClassName("tors4");
  for (let item of hide4) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide1: any = document.getElementsByClassName("fre1");
  for (let item of hide1) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide2: any = document.getElementsByClassName("fre2");
  for (let item of hide2) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide3: any = document.getElementsByClassName("fre3");
  for (let item of hide3) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide4: any = document.getElementsByClassName("fre4");
  for (let item of hide4) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide1: any = document.getElementsByClassName("lør1");
  for (let item of hide1) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide2: any = document.getElementsByClassName("lør2");
  for (let item of hide2) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide3: any = document.getElementsByClassName("lør3");
  for (let item of hide3) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var hide4: any = document.getElementsByClassName("lør4");
  for (let item of hide4) {
      console.log(item.id);
      item.style.display = 'none';
  }
  var show1: any = document.getElementsByClassName(value1);
  for (let item of show1) {
      console.log(item.id);
      item.style.display = 'grid';
  }
  var show2: any = document.getElementsByClassName(value2);
  for (let item of show2) {
      console.log(item.id);
      item.style.display = 'grid';
  }
  var show3: any = document.getElementsByClassName(value3);
  for (let item of show3) {
      console.log(item.id);
      item.style.display = 'grid';
  }
  var show4: any = document.getElementsByClassName(value4);
  for (let item of show4) {
      console.log(item.id);
      item.style.display = 'grid';
  }

 }
}
