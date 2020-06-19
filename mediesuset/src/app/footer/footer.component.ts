import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  comments: any;
  produkt: any;
  users: any;
  produkt_id: any;
  res: any;
  accesstoken: any;
  configUrlComments = 'https://api.mediehuset.net/bakeonline/comments/';
  token = this.getCookie('token');
  commenters: any;
  angualar: any;
  firstName: any;
  lastName: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

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
  sendMail(email) {
    const token = this.getCookie('token');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const formData: any = new FormData();
    formData.append('email', email);
    console.dir(formData);

    this.http.post('https://api.mediehuset.net/mediesuset/newsletter', formData, { headers }).subscribe(
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
    setTimeout(() => {
      document.location.reload(true);
    }, 100);
  }

}
