import {IsNotEmpty, IsString} from "class-validator";

export class CreateTextDto {
    @IsNotEmpty()
    @IsString()
    text: string;
}