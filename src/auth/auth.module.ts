import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtModuleOptions } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './auth.jwt.strategy';
import { AuthService } from './auth.service';

@Module({
    imports: [
        forwardRef(() => UsersModule),
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (
                configService: ConfigService,
            ): Promise<JwtModuleOptions> => {
                return { secret: configService.get('SECRET') };
            },
        }),
        PassportModule,
    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
