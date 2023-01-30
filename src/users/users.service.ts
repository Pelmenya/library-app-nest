import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { SignInDto } from 'src/auth/dto/signin.dto';
import { SignUpDto } from 'src/auth/dto/signup.dto';
import { ERRORS } from './users.constants';
import { Users, UsersDocument } from './users.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) private UsersModel: Model<UsersDocument>,
        @InjectConnection() private connection: Connection,
    ) {}

    async create(dto: SignUpDto) {
        try {
            const user = await this.UsersModel.create(dto);
            if (!user) {
                throw new Error(ERRORS.NOT_CREATE_USER);
            }
            return user;
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }

    async find(dto: SignInDto) {
        try {
            const user = await this.UsersModel.findOne({ email: dto.email });
            if (!user) {
                throw new Error(ERRORS.BAD_EMAIL_OR_PASSWORD);
            }
            return user;
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }
}
