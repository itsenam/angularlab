import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gram';
  count = 0;
  number1=0;
  number2=0;
  result=0;

  listofNumbers = [6,9,4,2,0,911];
  listofnames = ["Mike","Gus","Finger","Saul","Jimmy"]

  increment = () => {
    this.count++;
  }

  decrement = () => {
    this.count--;
  }

  add = () => {
    this.result = this.number1 + this.number2;
  }
}
