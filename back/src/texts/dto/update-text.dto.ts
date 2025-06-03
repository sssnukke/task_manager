import {IsNotEmpty, IsNumber} from "class-validator";

export class UpdateTextDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    done: boolean;
}