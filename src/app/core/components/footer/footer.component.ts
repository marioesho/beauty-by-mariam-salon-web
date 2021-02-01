import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public hours = [
    { key: 'Monday', value: '10am - 6pm' },
    { key: 'Tuesday', value: '8am - 6pm' },
    { key: 'Wednesday', value: '8am - 6pm' },
    { key: 'Thursday', value: '8am - 6pm' },
    { key: 'Friday', value: '8am - 6pm' },
    { key: 'Saturday', value: '8am - 6pm' },
    { key: 'Sunday', value: 'Closed' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
