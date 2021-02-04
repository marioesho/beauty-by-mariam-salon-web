import { Component, OnInit } from '@angular/core';

import { ListItem } from '../core/models/list-item';

@Component({
  selector: 'app-salon-services',
  templateUrl: './salon-services.component.html',
  styleUrls: ['./salon-services.component.scss']
})
export class SalonServicesComponent implements OnInit {
  // Column 1
  public hairServices: ListItem[] = [
    { key: 'Women\'s Haircut w/Styling', value: '$58 - $111', description: '15 MIN'},
    { key: 'Women\'s Haircut w/out Styling', value: '$48 - $88'},
    { key: 'Men\'s Haircut', value: '$38 - $48'}
  ];
  public colorServices: ListItem[] = [
    { key: 'One-Step Color / Root Touch-Up', value: '$73 - $108'},
    { key: 'Two-Step Color / Root Touch-Up', value: '$83 - $128'}
  ];

  // Column 2
  public specialtyHairServices: ListItem[] = [
    { key: 'Formal Hair Style', value: '$78 - $128', description: '45 MIN / DOES NOT INCLUDE BROW WAX'},
    { key: 'Conditioning Treatments', value: '$38 - $53'}
  ];
  public textureServices: ListItem[] = [
    { key: 'Perms / Relaxers', value: 'Starting at $103'},
    { key: 'Thermal Straightening', value: '$153 per hour'},
    { key: 'Perfection Smoothing Treatment', value: 'Starting at $253'}
  ];

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
