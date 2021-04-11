import { SocialLinks, SocialMedia } from '../core/models/social-links';
import { CarouselItem } from '../core/models/carousel-item';

export class Artist {
  public imageUrl!: string;
  public name!: string;
  public skills!: string;
  public socialLinks?: SocialLinks;
  public quote?: string;
  public carousel?: CarouselItem[];
}

/* Example Map
[
  'mariamYelda',
  {
    imageUrl: 'assets/images/artist-1.jpg',
    name: 'Mariam Yelda',
    skills: 'STYLIST / COLORIST / MAKEUP ARTIST / EXTENSION ARTIST',
    socialLinks: {
      facebook: { link: 'https://www.facebook.com/Beautybymariam1' } as SocialMedia,
      instagram: { link: 'https://www.instagram.com/beautybymariamsalon/?hl=en' } as SocialMedia
    } as SocialLinks,
    quote: 'I\'m a boss ass bitch!',
    carousel: [
      { imageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg', description: 'First Slide' } as CarouselItem,
      { imageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg', description: 'Second Slide' } as CarouselItem,
      { imageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg', description: 'Third Slide' } as CarouselItem
    ]
  }
] */

export const Artists: Map<string, Artist> = new Map([
  [
    'mariamYelda',
    {
      imageUrl: 'assets/images/artist-1.jpg',
      name: 'Mariam Yelda',
      skills: 'Makeup Artist',
      socialLinks: {
        instagram: { link: 'https://www.instagram.com/beautybymariam/', description: '@beautybymariam' } as SocialMedia,
        twitter: { link: 'https://twitter.com/mariamyelda', description: '@mariamyelda' } as SocialMedia,
        pinterest: { link: 'https://www.pinterest.com/mariamyelda', description: '@mariamyelda' } as SocialMedia
      } as SocialLinks
    }
  ],
  [
    'nitaShekreli',
    {
      imageUrl: 'assets/images/artist-1.jpg',
      name: 'Nita Shekreli',
      skills: 'Makeup Artist',
      socialLinks: {
        instagram: { link: 'https://www.instagram.com/makeupbynita/', description: '@makeupbynita' } as SocialMedia,
        twitter: { link: 'https://twitter.com/makeup_bynita', description: '@makeup_bynita' } as SocialMedia
      } as SocialLinks
    }
  ],
  [
    'meaganHana',
    {
      imageUrl: 'assets/images/artist-1.jpg',
      name: 'Meagan Hana',
      skills: 'Makeup Artist',
      socialLinks: {
        instagram: { link: 'https://www.instagram.com/makeupbabe_meagan/', description: '@makeupbabe_meagan' } as SocialMedia,
        facebook: { link: 'https://www.facebook.com/meaganhanamakeup', description: '@meaganhanamakeup' } as SocialMedia
      } as SocialLinks
    }
  ],
  [
    'lindaShamoun',
    {
      imageUrl: 'assets/images/artist-1.jpg',
      name: 'Linda Shamoun',
      skills: 'Hair Stylist / Makeup Artist',
      socialLinks: {
        instagram: { link: 'https://www.instagram.com/beautybylinda__/', description: '@beautybylinda__' } as SocialMedia
      } as SocialLinks
    }
  ],
  [
    'jenClay',
    {
      imageUrl: 'assets/images/artist-1.jpg',
      name: 'Jen Clay',
      skills: 'Hair Stylist',
      socialLinks: {
        instagram: { link: 'https://www.instagram.com/beautybyjenclay/', description: '@beautybyjenclay' } as SocialMedia
      } as SocialLinks
    }
  ],
  [
    'sueBakkal',
    {
      imageUrl: 'assets/images/artist-1.jpg',
      name: 'SueBakkal',
      skills: 'Hair Stylist',
      socialLinks: {
        instagram: { link: 'https://www.instagram.com/stylesbysuesue/', description: '@stylesbysuesue' } as SocialMedia
      } as SocialLinks
    }
  ]
]);
