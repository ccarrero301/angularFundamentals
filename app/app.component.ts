import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: string;
  isHappy: boolean = false;
  logo: string = 'img/Geralt.jpg'
  name: string = 'Todd'
  numberOne: number = 1;
  numberTwo: number = 2;

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
