import { City } from '../../../types/city-type.enum.js';
import { FeaturesType } from '../../../types/features-type.enum.js';
import { OfferType } from '../../../types/offer-type.enum.js';
import { LocationType } from '../../../types/location-type.type.js';
import {
  ArrayMinSize,
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsInt,
  Length,
  Max,
  MaxLength,
  Min,
  IsNotEmptyObject
} from 'class-validator';
import { OfferConstraints } from '../../../utils/constraints.js';

export default class UpdateOfferDto {
  @IsOptional()
  @Length(OfferConstraints.TitleMinLength, OfferConstraints.TitleMaxLength, {message: 'Min title length is 10, max is 100'})
  public title?: string;

  @IsOptional()
  @Length(OfferConstraints.DescriptionMinLength, OfferConstraints.DescriptionMaxLength, {message: 'Min description length is 20, max is 1024'})
  public description?: string;

  @IsOptional()
  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public postDate?: Date;

  @IsOptional()
  @IsEnum(City, {message: 'City must be "Paris", "Cologne", "Brussels ", "Amsterdam ", "Hamburg", "Dusseldorf"'})
  public city?: City;

  @IsOptional()
  @MaxLength(OfferConstraints.PreviewImageMaxLength, {message: 'Too long for field "previewImage"'})
  public previewImage?: string;

  @IsOptional()
  @IsArray({ message: 'Field "detailImages" must be an array' })
  @ArrayMinSize(OfferConstraints.DetaileImagesMinCount, { message: 'previewImage should only contain 6 values' })
  @ArrayMaxSize(OfferConstraints.DetaileImagesMaxCount, { message: 'previewImage should only contain 6 values' })
  @MaxLength(OfferConstraints.DetailImageMaxLength, {each: true, message: 'Too long for field "previewImage"'})
  public detailImages?: string[];

  @IsOptional()
  @IsBoolean({message: 'isPremium must be "true" or "false"'})
  public isPremium?: boolean;

  @IsOptional()
  @IsEnum(OfferType, {each: true, message: 'offerType must be a value from offerType list'})
  public offerType?: OfferType;

  @IsOptional()
  @IsInt({message: 'RoomsNumber must be an integer'})
  @Min(OfferConstraints.RoomsNumberMin, {message: 'Minimum roomsNumber is 1'})
  @Max(OfferConstraints.RoomsNumberMax, {message: 'Maximum roomsNumber is 8'})
  public roomsNumber?: number;

  @IsOptional()
  @IsInt({message: 'GuestsNumber must be an integer'})
  @Min(OfferConstraints.GuestsNumberMin, {message: 'Minimum guestsNumber is  1'})
  @Max(OfferConstraints.GuestsNumberMax, {message: 'Maximum guestsNumber is 10'})
  public guestsNumber?: number;

  @IsOptional()
  @IsInt({message: 'Price must be an integer'})
  @Min(OfferConstraints.PriceMin, {message: 'Minimum price is 100'})
  @Max(OfferConstraints.PriceMax, {message: 'Maximum price is 100000'})
  public price?: number;

  @IsOptional()
  @IsArray({message: 'Field "features" must be an array' })
  @IsEnum(FeaturesType, {each: true, message: 'Features must be a value from FeaturesType list'})
  public features?: FeaturesType[];

  @IsOptional()
  @IsNotEmptyObject({}, {message: '"Location" field must be an object'})
  public location?: LocationType;
}
