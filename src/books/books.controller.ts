import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { IdValidationPipe } from 'src/pipes/id-validation/id-validation.pipe';
import { ERRORS } from './books.constants';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/book.dto';
import { IBookDTO } from './dto/i-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    async getBooks() {
        return await this.booksService.getBooks();
    }

    @Get(':id')
    async getBook(@Param('id', IdValidationPipe) id: string) {
        try {
            const book = await this.booksService.getBook(id);
            if (!book) {
                throw new Error();
            }
            return book;
        } catch (e) {
            throw new NotFoundException(ERRORS.BOOK_NOT_FOUND);
        }
    }

    @Post()
    async create(@Body() dto: CreateBookDTO) {
        return await this.booksService.create(dto);
    }

    @Delete(':id')
    async delete(@Param('id', IdValidationPipe) id: string) {
        try {
            const book = await this.booksService.delete(id);
            if (!book) {
                throw new Error();
            }
            return book;
        } catch (e) {
            throw new NotFoundException(ERRORS.BOOK_NOT_FOUND);
        }
    }

    @Put(':id')
    async update(
        @Param('id', IdValidationPipe) id: string,
        @Body() dto: Partial<IBookDTO>,
    ) {
        try {
            const book = await this.booksService.update(id, dto);
            if (!book) {
                throw new Error();
            }
            return book;
        } catch (e) {
            throw new NotFoundException(ERRORS.BOOK_NOT_FOUND);
        }
    }
}
