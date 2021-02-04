import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../core/models/social-media';
import { Artist } from './artists';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public artists: Artist[] = [
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      routeParam: 'mariamYelda',
      name: 'Mariam Yelda',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    },
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      routeParam: 'mariamYelda',
      name: 'Mariam Yelda',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    },
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      routeParam: 'mariamYelda',
      name: 'Mariam Yelda',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    },
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      routeParam: 'mariamYelda',
      name: 'Mariam Yelda',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    },
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      routeParam: 'mariamYelda',
      name: 'Mariam Yelda',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    },
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      routeParam: 'mariamYelda',
      name: 'Mariam Yelda',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    },
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      routeParam: 'mariamYelda',
      name: 'Mariam Yelda',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    },
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      routeParam: 'mariamYelda',
      name: 'Mariam Yelda',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    },
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      routeParam: 'mariamYelda',
      name: 'Mariam Yelda',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    },
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      routeParam: 'mariamYelda',
      name: 'Mariam Yelda',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
