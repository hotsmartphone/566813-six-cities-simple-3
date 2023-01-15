import { OfferType } from '../types/offer-type.enum.js';
import { Offer } from '../types/offer.type.js';
import { cities } from '../types/city-type.type.js';
import { FeaturesType } from '../types/features-type.enum.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [
    title,
    description,
    postDate,
    city,
    previewImage,
    detailImage,
    isPremium,
    rating,
    offerType,
    roomsNumber,
    guestsNumber,
    price,
    features,
    userId,
    commentsNumber,
    locationLatitude,
    locationLongitude
  ] = tokens;

  const foundCity = cities.find((el) => (el === city));

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: foundCity || 'Amsterdam',
    previewImage,
    detailImage: detailImage.split(';'),
    isPremium: Boolean(isPremium),
    rating: Number.parseInt(rating, 10),
    offerType: OfferType[offerType as 'Apartment' | 'House' | 'Room' | 'Hotel'],
    roomsNumber: Number.parseInt(roomsNumber, 10),
    guestsNumber: Number.parseInt(guestsNumber, 10),
    price: Number.parseInt(price, 10),
    features: features.split(';').map((name) => (FeaturesType[name as 'Breakfast' | 'AirConditioning' | 'LaptopFriendlyWorkspace' | 'BabySeat' | 'Washer' | 'Towels' | 'Fridge'])),
    userId,
    commentsNumber: Number.parseInt(commentsNumber, 10),
    location: {
      latitude:  Number.parseFloat(locationLatitude),
      longitude:  Number.parseFloat(locationLongitude)
    }
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';