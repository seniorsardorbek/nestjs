import { Transform } from "class-transformer";
import { IsBoolean, IsMongoId, IsNotEmpty,  IsOptional, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateTodoDto {
    @IsMongoId()
    userId: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(200)

    text: string;


    @Transform((val) => Boolean(val))
    @IsBoolean()
    completed?: boolean;
}
