import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    full_name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(25)
    password: string;

    @IsString()
    @IsNotEmpty()
    phonenumber: string;
}
