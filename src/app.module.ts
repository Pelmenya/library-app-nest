import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';

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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
