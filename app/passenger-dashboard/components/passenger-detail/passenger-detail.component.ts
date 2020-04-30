import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";
import { Passenger } from "../../Models/passenger.interface";
import { IfObservable } from "rxjs/observable/IfObservable";

@Component({
  selector: 'passenger-detail',
  templateUrl: 'passenger-detail.component.html',
  styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() { }

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChanged(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }

    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
