import { Component, OnInit } from "@angular/core";

import { Passenger } from '../../Models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  templateUrl: 'passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this.passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    console.log(event);

    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
  }
}
