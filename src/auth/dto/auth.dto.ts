import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";


export class LoginDto {
    @IsString()
    @IsNotEmpty()
    phonenumber: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(25)
    password: string;
}

