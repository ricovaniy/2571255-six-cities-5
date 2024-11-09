import {Offer} from '../models/offer.ts';
import {MockLocations} from './locations.ts';
import {MockHosts} from './hosts.ts';
import {MockPoints} from './points.ts';

export const MockOffers: Offer[] = [
  {
    id: '1',
    title: 'Cozy apartment in the city center',
    type: 'apartment',
    price: 120,
    city: MockLocations[0],
    location: MockPoints[1],
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: 'A lovely apartment with a great view of the city.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'TV'],
    host: MockHosts[0],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/7.jpg'],
    maxAdults: 4
  },
  {
    id: '2',
    title: 'Spacious house with a garden',
    type: 'house',
    price: 250,
    city: MockLocations[0],
    location: MockPoints[2],
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    description: 'Descrp 1',
    bedrooms: 3,
    goods: ['Wi-fi'],
    host: MockHosts[1],
    images: ['https://14.design.htmlacademy.pro/static/hotel/5.jpg', 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg'],
    maxAdults: 3
  },
  {
    id: '3',
    title: 'Modern studio in the heart of the city',
    type: 'studio',
    price: 90,
    city: MockLocations[0],
    location: MockPoints[3],
    isFavorite: true,
    isPremium: false,
    rating: 4.0,
    description: 'Descrp 2',
    bedrooms: 2,
    goods: ['Tv'],
    host: MockHosts[2],
    images: ['https://14.design.htmlacademy.pro/static/hotel/3.jpg', 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/9.jpg'],
    maxAdults: 3
  },
  {
    id: '4',
    title: 'Luxury villa with a pool',
    type: 'villa',
    price: 500,
    city: MockLocations[0],
    location: MockPoints[4],
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    description: 'Descrp 3',
    bedrooms: 3,
    goods: ['Kitchen'],
    host: MockHosts[3],
    images: ['https://14.design.htmlacademy.pro/static/hotel/4.jpg', 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg'],
    maxAdults: 3
  }
];
