import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }

  eventsUrl = 'http://localhost:3000/events?roomId=';
  creventsUrl = 'http://localhost:3000/events';
  urlForDelete = 'http://localhost:3000/events/';

  dannie: object;
  getEvents(numberRoom): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl + numberRoom);
    // console.log(this.http.get<Event[]>(this.eventsUrl));
  }
  createEvent(start: object): Observable<Event[]> {
    return this.http.post<Event[]>(this.creventsUrl, start);
  }
  deleteEvent(id: number): Observable<{}> {
    const url = this.urlForDelete + id;
    return this.http.delete(url);
  }
  getRooms(comnata) {
    return this.http.get('http://localhost:3000/rooms?id=' + comnata).subscribe(result => { this.dannie = result; });


  }

}
