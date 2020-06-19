import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-koeb-billet',
  templateUrl: './koeb-billet.component.html',
  styleUrls: ['./koeb-billet.component.scss']
})
export class KoebBilletComponent implements OnInit {
  tickets: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .get(`https://api.mediehuset.net/mediesuset/tickets`)
    .subscribe(data => {
      this.tickets = data;
      console.log(this.tickets)
    });
  }
  goToTicketPage(ticketId){
    this.router.navigate(['/kasse', ticketId]);
  }

}
