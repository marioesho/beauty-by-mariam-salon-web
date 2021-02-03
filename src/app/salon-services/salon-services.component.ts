import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-services',
  templateUrl: './salon-services.component.html',
  styleUrls: ['./salon-services.component.scss']
})
export class SalonServicesComponent implements OnInit {
  // Column 1
  public hairServices: KeyValue<string, string>[] = [
    { key: 'Women\'s Haircut w/Styling', value: '$58 - $111'},
    { key: 'Women\'s Haircut w/out Styling', value: '$48 - $88'},
    { key: 'Men\'s Haircut', value: '$38 - $48'}
  ];
  public colorServices: KeyValue<string, string>[] = [
    { key: 'One-Step Color / Root Touch-Up', value: '$73 - $108'},
    { key: 'Two-Step Color / Root Touch-Up', value: '$83 - $128'}
  ];

  // Column 2
  public specialtyHairServices: KeyValue<string, string>[] = [
    { key: 'Formal Hair Style', value: '$78 - $128'},
    { key: 'Conditioning Treatments', value: '$38 - $53'}
  ];
  public textureServices: KeyValue<string, string>[] = [
    { key: 'Perms / Relaxers', value: 'Starting at $103'},
    { key: 'Thermal Straightening', value: '$153 per hour'},
    { key: 'Perfection Smoothing Treatment', value: 'Starting at $253'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
