import { IsOptional, IsString } from "class-validator";

export class UserEntity {
    @IsString()
    id: string;

    @IsString()
    email: string;

    @IsString()
    senha: string;

    @IsString()
    @IsOptional()    
    name?: string;

    createdAt?: Date;
    updatedAt?: Date;
}