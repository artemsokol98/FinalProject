import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  constructor(private time: TimeService) { }
  showInputForm = false;
  id: number;
  numberRoom: number;
  timeEvent = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
    name: new FormControl()
  });
  Event = new FormGroup({
    numberEvent: new FormControl()
  });
  obsEvents: Observable<Event[]>;
  events: Event[];


  objEvent: object;
  rooms(i) {
    this.time.getRooms(i);
  }

  update() {
    this.getEvents(this.numberRoom);
  }
  ngOnInit() {

  }
  getEvents(numberRoom) {
    this.numberRoom = numberRoom;
    this.showInputForm = true;
    this.id = numberRoom;
    this.time.getEvents(numberRoom).subscribe(data => this.events = data);
    console.log(this.events);
  }
  public createEvent() {
    this.objEvent = {
      startAt: this.timeEvent.controls.start.value,
      endAt: this.timeEvent.controls.end.value,
      roomId: this.id,
      name: this.timeEvent.controls.name.value
    };
    console.log(this.timeEvent.controls.start.value);
    this.time.createEvent(this.objEvent).subscribe(start => JSON.stringify(start));
    console.log(this.timeEvent.controls.end.value);
    this.update();
  }
  deleteEvent() {
    this.time.deleteEvent(this.Event.controls.numberEvent.value).subscribe();
    this.update();
  }
}


