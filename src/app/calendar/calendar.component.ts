import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date();
  daysInMonth: Date[] = [];
  backgroundUrl: string = '/assets/snow.gif'; // Default background

  ngOnInit() {
    this.currentDate = new Date();
    this.generateCalendar();
    this.setDynamicBackground(); // Set the initial background
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
    this.setDynamicBackground(); // Update background on month change
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
    this.setDynamicBackground(); // Update background on month change
  }

  currentMonth() {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return monthNames[this.currentDate.getMonth()];
  }

  setDynamicBackground() {
    const month = this.currentDate.getMonth();
    const backgrounds = [
      '/assets/january.gif', '/assets/february.gif', '/assets/march.gif', '/assets/april.gif', '/assets/may.gif', '/assets/june.gif',
      '/assets/july.gif', '/assets/august.gif', '/assets/september.gif',
      '/assets/october.gif', '/assets/november.gif', '/assets/december.gif'
    ];

    this.backgroundUrl = backgrounds[month]; // Set the background based on the current month
  }
}
