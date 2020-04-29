import { Component } from "@angular/core";

interface Child {
  name: string;
  age: number;
}

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children: Child[] | null;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: string;
  logo: string = 'img/Geralt.jpg'
  name: string = ''

  isHappy: boolean = false;

  numberOne: number = 1;
  numberTwo: number = 2;

  passengers: Passenger[] = [{
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

  constructor() {
    this.title = 'Ultimate Angular';
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }

  handleInput(event: any) {
    this.name = event.target.value;
    console.log('handleInput');
  }

  handleClick() {
    this.name = 'MOTTO!';
  }

  handleChange(value: string) {
    this.name = value;
    console.log('handleChange');
  }

  getValue(value: string) {
    console.log(value);
  }
}
