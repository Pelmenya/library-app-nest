import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { ERRORS } from './books.constants';
import { IBookDTO } from './dto/i-book.dto';
import { libraryDB } from './mock-libraryDB';

@Injectable()
export class BooksService {
    getBooks() {
        return libraryDB.books;
    }

    getBook(id: string) {
        const book = libraryDB.books.find((book) => book.id === id);
        if (book) return book;
        throw new NotFoundException(ERRORS.BOOK_NOT_FOUND);
    }

    create(dto: Omit<IBookDTO, 'id'>) {
        const id = new Date().toISOString();
        libraryDB.books.push({ id, ...dto });
        return this.getBook(id);
    }

    update(id: string, dto: IBookDTO) {
        const book = libraryDB.books.findIndex((book) => book.id === id);

        if (book > -1) {
            libraryDB.books[book] = { ...libraryDB.books[book], ...dto };
            return libraryDB.books[book];
        }

        throw new NotFoundException(ERRORS.BOOK_NOT_FOUND);
    }

    delete(id: string) {
        const book = libraryDB.books.find((book) => book.id === id);

        if (book) {
            libraryDB.books = libraryDB.books.filter((item) => item.id !== id);
            return book;
        }
        throw new NotFoundException(ERRORS.BOOK_NOT_FOUND);
    }
}
