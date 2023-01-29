import { IsString, IsOptional } from 'class-validator';

export class CreateBookDTO {
    @IsString() title: string;

    @IsString() description: string;

    @IsString() authors: string;

    @IsOptional() @IsString() favorite?: string;

    @IsOptional() @IsString() fileCover?: string;

    @IsOptional() @IsString() fileName?: string;

    @IsString() @IsOptional() fileBook?: string;
}
