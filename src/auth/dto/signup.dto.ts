import { IsOptional, IsString } from 'class-validator';
import { SignInDto } from './signin.dto';

export class SignUpDto extends SignInDto {
    @IsString() firstName: string;
    @IsOptional() @IsString() lastName: string;
}
