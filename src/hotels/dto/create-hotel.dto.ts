import { IsString, IsNotEmpty, IsNumber, IsOptional, IsArray, IsIn, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class LocationDto {
  @IsString()
  @IsIn(['Point'])
  type: string;

  @IsArray()
  @IsNotEmpty({ each: true })
  @Type(() => Number)
  coordinates: [number];
}

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNumber()
  @IsOptional()
  star?: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  // @IsArray()
  // @IsOptional()
  // @IsString({ each: true })
  // images?: string[];

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => LocationDto)
  loc?: LocationDto;

  @IsString()
  @IsNotEmpty()
  price: string;
}
