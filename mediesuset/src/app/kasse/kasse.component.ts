import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-kasse',
  templateUrl: './kasse.component.html',
  styleUrls: ['./kasse.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KasseComponent implements OnInit {
  ticket: any;
  number: number = 1;
  loginForm: FormGroup;
  @ViewChild("price") price: ElementRef;
  @ViewChild("antal") antal: ElementRef;
  @ViewChild("calc1") calc1: ElementRef;
  @ViewChild("calc2") calc2: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    const ticketId = this.route.snapshot.paramMap.get('id');
    this.http
    .get(`https://api.mediehuset.net/mediesuset/tickets/${ticketId}`)
    .subscribe(data => {
      this.ticket = data;
      console.log(this.ticket)
    });
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  calcTicket(){
    console.log(this.antal.nativeElement.value);
    if (this.calc1.nativeElement.innerHTML === '') {
      this.calc1.nativeElement.innerHTML === '';
    } else {
      this.calc1.nativeElement.innerHTML = this.calc1.nativeElement.innerHTML / this.number * this.antal.nativeElement.value;
    }
    if (this.calc2.nativeElement.innerHTML === '') {
      this.calc2.nativeElement.innerHTML === '';
    } else {
      this.calc2.nativeElement.innerHTML = this.calc2.nativeElement.innerHTML / this.number * this.antal.nativeElement.value;
    }
    this.number = this.antal.nativeElement.value;

  }
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
 order(email, navn, adresse, post, by) {
    const token = this.getCookie('token');
    const user_id = this.getCookie('user_id');
    const produktId = this.route.snapshot.paramMap.get('id')
    const camp = '1';
    const mængde = '1';
    const type = 'print';

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const formData: any = new FormData();
    formData.append('id', 10);
    formData.append('email', email);
    formData.append('name', navn);
    formData.append('address', adresse);
    formData.append('zipcode', post);
    formData.append('city', by);
    formData.append('quantity', 2);
    formData.append('type', type);
    formData.append('ticket_name', 'Alm. Partoutbillet');
    formData.append('ticket_price', 1495.00);
    formData.append('camp_name', 'Camp Colorit');
    console.dir(formData);
    console.log(email)
    console.log(navn)
    console.log(adresse)
    console.log(post)
    console.log(by)
    console.log(produktId)
    console.log(camp)
    console.log(mængde)
    console.log(type)

    this.http.post('https://api.mediehuset.net/mediesuset/usertickets', formData, { headers }).subscribe(
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
}

