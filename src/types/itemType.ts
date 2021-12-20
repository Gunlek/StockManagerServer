import { IsDefined, IsInt, IsNumber, IsNumberString, IsString } from "class-validator";

export class Item {

    @IsDefined()
    @IsString()
    type: string;

    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsString()
    provider: string;

    @IsDefined()
    @IsInt()
    quantity: number;

    @IsDefined()
    @IsNumber()
    unitPrice: number;

    @IsDefined()
    @IsString()
    location: string;
}

export class RESTItem {

    @IsDefined()
    @IsString()
    type: string;

    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsString()
    provider: string;

    @IsDefined()
    @IsNumberString()
    quantity: string|number;

    @IsDefined()
    @IsNumberString()
    unitPrice: string|number;

    @IsDefined()
    @IsString()
    location: string;
}

export class StoredItem extends Item {
    id: number;
    createdAt: string;
    updatedAt: string;
}