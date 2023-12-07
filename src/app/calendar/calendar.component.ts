// calendar.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date();
  daysInMonth: Date[] = [];

  ngOnInit() {
    this.currentDate = new Date();
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    this.daysInMonth = this.getDaysArray(firstDay, lastDay);
  }

  getDaysArray(start: Date, end: Date): Date[] {
    const daysArray = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      daysArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return daysArray;
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }
  currentMonth(){
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

return monthNames[this.currentDate.getMonth()]
  }
//  isCday() {
//     if (!this.currentDate || !this.daysInMonth || this.daysInMonth.length === 0) {
//       // Add appropriate handling or return false if necessary data is not available
//       return false;
//     }

//     let day: number; // You need to assign a value to 'day' before using it

//     return this.daysInMonth[day].getDate() === this.currentDate.getDate();
//   }
}