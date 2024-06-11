import { Component, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-cal2',
  templateUrl: './cal2.component.html',
  styleUrls: ['./cal2.component.css']
})
export class Cal2Component {

  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  calendarApi: any; // Adjust the type as needed

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: []
  };

  constructor() {
  //   // Initialize calendarApi within the constructor or another lifecycle hook
    this.testCalendarApi();
  }

   private async testCalendarApi() {
    if (this.calendarComponent) {
      this.calendarApi = await this.calendarComponent.getApi();
  //     // Now you can use this.calendarApi as needed
    }  
    const currentDate = this.calendarApi.getDate();

    alert(currentDate)


      
    

  }

  // Rest of your component code...

  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];



  // Other methods or properties...
}
