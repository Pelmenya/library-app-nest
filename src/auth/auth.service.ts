import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async validate(dto: SignInDto) {
        return this.usersService.find(dto);
    }

    async signup(dto: SignUpDto) {
        return this.usersService.create(dto);
    }
}
