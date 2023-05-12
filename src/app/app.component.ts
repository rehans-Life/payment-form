import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount!: number;
  height!: number;
  miles!: number;

  car = {
    manufacturer: 'Toyota',
    model: 'GT86',
    year: '2014',
  };

  onChangeMiles(event: any): void {
    this.miles = parseFloat(event.target.value);
  }

  onChangeName(event: any): void {
    this.name = event.target.value;
  }

  onChangeDate(event: any): void {
    this.date = event.target.value;
  }

  onChangeAmount(event: any): void {
    this.amount = parseFloat(event.target.value);
  }

  onChangeHeight(event: any): void {
    this.height = parseFloat(event.target.value);
  }
}
