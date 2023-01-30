import { Module, forwardRef } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';

@Module({
    imports: [forwardRef(() => UsersModule)],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}
