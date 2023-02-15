import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { UserType } from '../../types/user-types.type.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';

const DETAIL_IMAGES_NUMBER = 6;

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const FIRST_MONTH_DAY = 1;
const LAST_MONTH_DAY = 31;

const FALSE = 0;
const TRUE = 1;

const MIN_RATE = 1;
const MAX_RATE = 5;

const MIN_ROOMS_NUMBER = 1;
const MAX_ROOMS_NUMBER = 8;

const MIN_GUESTS_NUMBER = 1;
const MAX_GUESTS_NUMBER = 10;

const MIN_COMMENTS_NUMBER = 0;
const MAX_COMMENTS_NUMBER = 500;

const MIN_GEOGRAPHICAL_DEGREES = 0;
const MAX_GEOGRAPHICAL_DEGREES = 90;

const PASSWORD_SAMPLE = 'testpassword';

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs().subtract(generateRandomValue(FIRST_MONTH_DAY, LAST_MONTH_DAY), 'day').toISOString();
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const detailImages = this.mockData.detailImages.slice(0, DETAIL_IMAGES_NUMBER).join(';');
    const isPremium = Boolean(generateRandomValue(FALSE, TRUE)).toString();
    const rating = generateRandomValue(MIN_RATE, MAX_RATE).toString();
    const offerType = Object.keys(OfferType)[generateRandomValue(0, Object.keys(OfferType).length - 1)];
    const roomsNumber = generateRandomValue(MIN_ROOMS_NUMBER, MAX_ROOMS_NUMBER).toString();
    const guestsNumber = generateRandomValue(MIN_GUESTS_NUMBER, MAX_GUESTS_NUMBER).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const features = getRandomItems<string>(this.mockData.features).join(';');
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarPath = getRandomItem<string>(this.mockData.avatarPaths);
    const password = PASSWORD_SAMPLE;
    const userType = Object.keys(UserType)[generateRandomValue(0, Object.keys(UserType).length - 1)];
    const commentsNumber = generateRandomValue(MIN_COMMENTS_NUMBER, MAX_COMMENTS_NUMBER).toString();
    const commentText = getRandomItem<string>(this.mockData.commentsText);
    const locationLatitude = generateRandomValue(MIN_GEOGRAPHICAL_DEGREES, MAX_GEOGRAPHICAL_DEGREES, 6).toString();
    const locationLongitude = generateRandomValue(MIN_GEOGRAPHICAL_DEGREES, MAX_GEOGRAPHICAL_DEGREES, 6).toString();
    return [
      title,
      description,
      postDate,
      city,
      previewImage,
      detailImages,
      isPremium,
      rating,
      offerType,
      roomsNumber,
      guestsNumber,
      price,
      features,
      name,
      email,
      avatarPath,
      password,
      userType,
      commentsNumber,
      commentText,
      locationLatitude,
      locationLongitude
    ].join('\t');
  }
}
