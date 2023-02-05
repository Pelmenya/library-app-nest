import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Books, BooksDocument } from './books.schema';
import { CreateBookDTO } from './dto/book.dto';
import { IBookDTO } from './dto/i-book.dto';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Books.name) private BooksModel: Model<BooksDocument>,
    ) {}

    async getBooks() {
        return this.BooksModel.find().exec();
    }

    async getBook(id: string) {
        return this.BooksModel.findById(id).exec();
    }

    async create(dto: CreateBookDTO) {
        return this.BooksModel.create(dto);
    }

    async update(id: string, dto: Partial<IBookDTO>) {
        return this.BooksModel.findOneAndUpdate({ _id: id }, dto);
    }

    async delete(id: string) {
        return this.BooksModel.findOneAndRemove({ _id: id });
    }
}
