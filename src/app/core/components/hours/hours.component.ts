import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {
  public hours = [
    { key: 'Monday', value: '10am - 6pm' },
    { key: 'Tuesday', value: '8am - 6pm' },
    { key: 'Wednesday', value: '8am - 6pm' },
    { key: 'Thursday', value: '8am - 6pm' },
    { key: 'Friday', value: '8am - 6pm' },
    { key: 'Saturday', value: '8am - 6pm' },
    { key: 'Sunday', value: 'Closed' }
  ];

  @Input() additionalClasses = '';

  constructor() { }

  ngOnInit(): void {
  }

}
