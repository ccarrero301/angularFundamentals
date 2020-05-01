import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Passenger } from "./Models/passenger.interface";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) { }

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response)
      .catch((error: any) => Observable.throw(error));
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .map((response: Response) => response)
      .catch((error: any) => Observable.throw(error));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, { headers: headers })
      .map((response: Response) => response)
      .catch((error: any) => Observable.throw(error));
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response)
      .catch((error: any) => Observable.throw(error));
  }
}
