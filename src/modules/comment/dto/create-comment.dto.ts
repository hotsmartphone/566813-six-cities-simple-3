import {IsMongoId, IsInt, IsString, Length, Min, Max} from 'class-validator';

export default class CreateCommentDto {
  @IsString({message: 'text is required'})
  @Length(5, 1024, {message: 'Min text length is 5, text is 1024'})
  public text!: string;

  @IsInt({message: 'Rating must be an integer'})
  @Min(1, {message: 'Minimum rating is  1'})
  @Max(5, {message: 'Maximum rating is 5'})
  public rating!: number;

  @IsMongoId({message: 'offerId field must be a valid id'})
  public offerId!: string;

  @IsMongoId({message: 'userId field must be a valid id'})
  public userId!: string;
}
