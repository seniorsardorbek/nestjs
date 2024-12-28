import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsMongoId()
  hotel: string;

 

  // @IsNotEmpty()
  // @IsString()
  // duration: string;

  // @IsNotEmpty()
  // @IsString()
  // price: string;

  @IsNotEmpty()
  @IsString()
  enter_date: string;

  @IsNotEmpty()
  @IsString()
  exit_date: string;
}
