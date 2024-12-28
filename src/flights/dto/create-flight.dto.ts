import { IsEnum, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateFlightDto {
  @IsNotEmpty()
  @IsMongoId()
  where: string;

  @IsNotEmpty()
  @IsMongoId()
  to: string;

  @IsNotEmpty()
  @IsString()
  when: string;

  @IsNotEmpty()
  @IsEnum(['bussiness', 'economy', 'first-class'])
  class: string;

  @IsNotEmpty()
  @IsString()
  duration: string;

  @IsNotEmpty()
  @IsString()
  plane: string;
}
