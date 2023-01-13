import { Injectable } from '@nestjs/common';
import { libraryDB } from './mock-libraryDB';

@Injectable()
export class BooksService {
    getBooks() {
        return libraryDB.books;
    }
}
