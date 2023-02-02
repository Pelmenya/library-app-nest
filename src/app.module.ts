import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BookCommentsModule } from './book-comments/book-comments.module';
import { AppGateway } from './app.gateway';
import { BookCommentsService } from './book-comments/book-comments.service';

const {
    MONGODB_BOOKS_URL = 'mongodb://mongo:27017',
    MONGODB_ADMINUSERNAME = 'root',
    MONGODB_ADMINPASSWORD = 'example',
    DB_NAME = 'library',
} = process.env;

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(MONGODB_BOOKS_URL, {
            user: MONGODB_ADMINUSERNAME,
            pass: MONGODB_ADMINPASSWORD,
            dbName: DB_NAME,
        }),
        BooksModule,
        AuthModule,
        UsersModule,
        BookCommentsModule,
    ],
    controllers: [AppController],
    providers: [AppService, AppGateway],
})
export class AppModule {}
