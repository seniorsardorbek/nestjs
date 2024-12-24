import { IsBoolean, IsString, IsNotEmpty } from 'class-validator';

export class CreateServiceDto {
  @IsBoolean()
  breakfast: boolean;

  @IsString()
  @IsNotEmpty()
  hotel: string;

  @IsBoolean()
  restoran: boolean;

  @IsBoolean()
  wifi: boolean;

  @IsBoolean()
  transfer: boolean;

  @IsBoolean()
  fitness: boolean;

  @IsBoolean()
  pool: boolean;
}
