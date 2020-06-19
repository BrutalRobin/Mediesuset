import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  configUrl = 'https://api.mediehuset.net/mediesuset/';
  configUrlStages = 'https://api.mediehuset.net/mediesuset/stages';
  configUrlEvents = 'https://api.mediehuset.net/mediesuset/events';
  configUrlArtists = 'https://api.mediehuset.net/mediesuset/artists';
  configUrlCamps = 'https://api.mediehuset.net/mediesuset/camps';
  configUrlTickets = 'https://api.mediehuset.net/mediesuset/tickets';
  configUrlNews = 'https://api.mediehuset.net/mediesuset/news';
  configUrlUserProgram = 'https://api.mediehuset.net/mediesuset/programme/';

  constructor(private http: HttpClient) { }

  getNews() {
    console.log(this.http.get(this.configUrlNews));

    return this.http.get(this.configUrlNews);
  }
}
