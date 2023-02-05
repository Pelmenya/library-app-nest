import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookComments, BookCommentsDocument } from './book-comments.schema';
import { BookCommentsDto } from './dto/book-comments.dto';

@Injectable()
export class BookCommentsService {
    constructor(
        @InjectModel(BookComments.name)
        private BookCommentsModel: Model<BookCommentsDocument>,
    ) {}

    async create(dto: BookCommentsDto) {
        return await this.BookCommentsModel.create(dto);
    }

    async update(id: string, dto: Omit<BookCommentsDto, 'bookId'>) {
        return await this.BookCommentsModel.findByIdAndUpdate(id, dto);
    }

    async find(id: string) {
        return await this.BookCommentsModel.findById(id);
    }

    async delete(id: string) {
        return await this.BookCommentsModel.findByIdAndRemove(id);
    }

    async findAllComments(bookId: string) {
        return await this.BookCommentsModel.find({ bookId });
    }
}
