import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { Books, BooksSchema } from './books.schema';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Books.name, schema: BooksSchema }]),
    ],
    controllers: [BooksController],
    providers: [BooksService],
    exports: [BooksService],
})
export class BooksModule {}
