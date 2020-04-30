import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../Models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  templateUrl: 'passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.passengers = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    }, {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: null
    }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: [{ name: 'Jessica', age: 1 }]
    }];
  }

  handleEdit(event: Passenger) {
    this.passengers =
      this.passengers.map((passenger: Passenger) => {

        if (passenger.id == event.id) {
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
  }

  handleRemove(event: Passenger) {
    this.passengers =
      this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
  }
}
