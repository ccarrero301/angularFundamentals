import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Passenger } from "./Models/passenger.interface";

import { map, catchError } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) { }

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get<Passenger[]>(PASSENGER_API)
      .pipe(catchError((error: any) => Observable.throw(error)));

  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get<Passenger>(`${PASSENGER_API}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, { headers: headers })
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete<Passenger>(`${PASSENGER_API}/${passenger.id}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }
}
