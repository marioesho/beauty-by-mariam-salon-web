import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  @Input() pageTitle!: string;
  @Input() imageUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
