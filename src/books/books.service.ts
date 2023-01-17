import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Books, BooksDocument } from './books.schema';
import { IBookDTO } from './dto/i-book.dto';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Books.name) private BooksModel: Model<BooksDocument>,
        @InjectConnection() private connection: Connection,
    ) {}

    getBooks() {
        return this.BooksModel.find().exec();
    }

    getBook(id: string) {
        const book = this.BooksModel.findById(id);
        return book;
    }

    create(dto: Omit<IBookDTO, 'id'>) {
        const book = new this.BooksModel(dto);
        return book.save();
    }

    update(id: string, dto: Partial<IBookDTO>) {
        const book = this.BooksModel.findOneAndUpdate({ _id: id }, dto);
        return book;
    }

    delete(id: string) {
        return this.BooksModel.findOneAndRemove({ _id: id });
    }
}
