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
  ticketId = this.route.snapshot.paramMap.get('id');
  koebForm = this.fb.group({
    amount: ['', Validators.required],
    email: ['', Validators.required],
    name: ['', Validators.required],
    address: ['', Validators.required],
    zipcode: ['', Validators.required],
    city: ['', Validators.required],
    campingAmount: ['', Validators.required],
    password: ['', Validators.required],
    repassword: ['', Validators.required],
    campId: ['', Validators.required],
    type: ['', Validators.required],
  });
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
  onSubmit() {
    const formData: any = new FormData();
    formData.append('email', this.koebForm.get('email').value);
    formData.append('password', this.koebForm.get('password').value);
    formData.append('name', this.koebForm.get('name').value);
    formData.append('address', this.koebForm.get('address').value);
    formData.append('zipcode', this.koebForm.get('zipcode').value);
    formData.append('city', this.koebForm.get('city').value);
    formData.append('ticket_id', this.ticketId);
    formData.append('camp_id', this.koebForm.get('campId').value);
    formData.append('quantity', this.koebForm.get('amount').value);
    formData.append('type', this.koebForm.get('type').value);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getCookie('token')}`);
    this.http.post(`https://api.mediehuset.net/mediesuset/usertickets`, formData, { headers }).subscribe((res: any) => {
      console.log(res);
      if (res.status === true) {
        window.alert('Tak for købet');
      }
    });
  }
}


