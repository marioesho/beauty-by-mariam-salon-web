import { SocialMedia } from '../core/models/social-media';

export class Artist {
  public imageUrl!: string;
  public name!: string;
  public skills!: string;
  public socialMedia?: SocialMedia;
  public quote?: string;
}

export const Artists: Map<string, Artist> = new Map([
  [
    'mariamYelda',
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      name: 'Mariam Yelda',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    }
  ],
  [
    'Bailey',
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      name: 'Bailey',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    }
  ],
  [
    'Carter',
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      name: 'Carter',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    }
  ],
  [
    'Gabrielle',
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      name: 'Gabrielle',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    }
  ],
  [
    'Heather',
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      name: 'Heather',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    }
  ],
  [
    'Holly',
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      name: 'Holly',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    }
  ],
  [
    'Hollyanne',
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      name: 'Hollyanne',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    }
  ],
  [
    'Jade',
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      name: 'Jade',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    }
  ],
  [
    'Jashley',
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      name: 'Jashley',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    }
  ],
  [
    'Javaneh',
    {
      imageUrl: '../../assets/images/artist-1.jpg',
      name: 'Javaneh',
      skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
      socialMedia: {
        facebook: 'https://www.facebook.com/Beautybymariam1',
        instagram: 'https://www.instagram.com/beautybymariamsalon/?hl=en'
      } as SocialMedia,
      quote: 'I\'m a boss ass bitch!'
    }
  ]
]);
