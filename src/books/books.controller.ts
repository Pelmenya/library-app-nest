import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { IBookDTO } from './dto/i-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    getBooks() {
        return this.booksService.getBooks();
    }

    @Get(':id')
    getBook(@Param('id') id: string) {
        return this.booksService.getBook(id);
    }

    @Post()
    create(@Body() dto: Omit<IBookDTO, 'id'>) {
        return this.booksService.create(dto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.booksService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: Partial<IBookDTO>) {
        return this.booksService.update(id, dto);
    }
}
