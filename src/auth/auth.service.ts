import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async signin(dto: SignInDto) {
        const user = await this.usersService.findUser(dto);
        const { email, firstName, _id: id } = user;
        const access_token = await this.jwtService.signAsync({
            email,
            firstName,
            id,
        });
        return {
            access_token,
        };
    }

    async signup(dto: SignUpDto) {
        return this.usersService.create(dto);
    }

    async validateUser(dto: SignInDto) {
        const user = await this.usersService.findUser(dto);
        if (user) {
            return user;
        }
        return null;
    }
}
