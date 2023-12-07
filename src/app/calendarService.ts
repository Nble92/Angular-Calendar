import { Injectable } from '@angular/core';
import { Calendar, EventInput } from '@fullcalendar/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private calendarApi!: Calendar;

  setCalendarApi(calendarApi: Calendar): void {
    this.calendarApi = calendarApi;
  }

  getMonths(): string[] {
    // You can use the FullCalendar API to get months based on your requirements
    // For example, you can get the currently visible dates and extract months
    const visibleDates: Date[] = this.calendarApi.view.activeStart ? [this.calendarApi.view.activeStart] : [];
    return visibleDates.map(date => date.toLocaleString('default', { month: 'short' }));
  }
}