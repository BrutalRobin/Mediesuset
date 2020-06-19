import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mit-program',
  templateUrl: './mit-program.component.html',
  styleUrls: ['./mit-program.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MitProgramComponent implements OnInit {
  program: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    const token = this.getCookie('token');
    const user_id = this.getCookie('user_id');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http
    .get(`https://api.mediehuset.net/mediesuset/programme/${user_id}`, { headers })
    .subscribe(data => {
      this.program = data;
      console.log(user_id)
      console.log(this.program)
    });

  }
  setUserColor(id) {
    switch (id) {
      case 'Rød scene':
        return '#A33A49';
      case 'Blå scene':
        return '#396999';
      case 'Grøn scene':
        return '#6B8846';
      case 'Lilla scene':
        return '#80347C';
    }
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
  deleteIt(id) {
    const token = this.getCookie('token');
    const user_id = this.getCookie('user_id');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.delete(`https://api.mediehuset.net/mediesuset/programme/${id}`, { headers }).subscribe(
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
