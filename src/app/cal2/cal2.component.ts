import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-cal2',
  templateUrl: './cal2.component.html',
  styleUrls: ['./cal2.component.css']
})
export class Cal2Component {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [],
    datesSet: this.onDatesSet.bind(this), // Detect month changes
  };

  backgroundStyle: string = ''; // Holds the dynamic background CSS property value

  constructor() {}

  onDatesSet(): void {
    // Get the month from the toolbar
    const toolbarTitle = document.querySelector('.fc-toolbar-title')?.textContent || '';
    const firstWord = toolbarTitle.split(' ')[0]; // Extract the first word
    console.log(firstWord); // Debug to verify the extracted word
        const monthName = this.extractMonthFromToolbar(toolbarTitle);

    if (monthName) {
      this.updateBackground(monthName);
    }
  }

  extractMonthFromToolbar(toolbarTitle: string): string | null {
    // Extract the month from the toolbar title, e.g., "January 2025"
    const monthRegex = /^(January|February|March|April|May|June|July|August|September|October|November|December)/i;
    const match = toolbarTitle.match(monthRegex);

    return match ? match[0].toLowerCase() : null; // Return the lowercase month name
  }

  updateBackground(monthName: string): void {
    document.body.style.background = `url('/assets/${monthName}.gif') center center no-repeat`;
    document.body.style.backgroundSize = 'cover'; // Ensure it covers the entire page
    document.body.style.margin = '0'; // Remove default margin to avoid gaps
  }
  
}
