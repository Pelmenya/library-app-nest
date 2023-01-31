import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { Books, BooksSchema } from './books.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './books.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Books.name, schema: BooksSchema }]),
    ],
    controllers: [BooksController],
    providers: [BooksService],
    exports: [BooksService],
})
export class BooksModule {}
