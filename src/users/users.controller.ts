import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { SignInDto } from 'src/auth/dto/signin.dto';
import { SignUpDto } from 'src/auth/dto/signup.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService,
    ) {}

    @HttpCode(200)
    @Post('signin')
    async signin(@Body() dto: SignInDto) {
        const user = await this.authService.validate(dto);
        return user;
    }

    @Post('signup')
    async signup(@Body() dto: SignUpDto) {
        const user = await this.authService.signup(dto);
        return user;
    }
}
