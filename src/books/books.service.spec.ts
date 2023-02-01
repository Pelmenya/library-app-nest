import { Test, TestingModule } from '@nestjs/testing';
import { Types } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { BooksService } from './books.service';
import { Books } from './books.schema';
import { IBookDTO } from './dto/i-book.dto';
import { CreateBookDTO } from './dto/book.dto';

describe('BooksService', () => {
    let service: BooksService;
    const books: Partial<IBookDTO>[] = [
        {
            id: '1',
            title: 'New Book ',
            description: 'New Book Description',
            authors: 'John Black',
            favorite: '1',
        },
        {
            id: '2',
            title: 'New Book Again',
            description: 'New Book Description  Again',
            authors: 'John Black  Again',
            favorite: '2 Again',
        },
    ];

    const exec = { exec: jest.fn() };
    const create = jest.fn();
    const findOneAndUpdate = jest.fn();
    const findOneAndRemove = jest.fn();

    const booksRepositoryFactory = () => ({
        find: () => exec,
        findById: () => exec,
        create,
        findOneAndUpdate,
        findOneAndRemove,
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BooksService,
                {
                    useFactory: booksRepositoryFactory,
                    provide: getModelToken(Books.name),
                },
            ],
        }).compile();

        service = module.get<BooksService>(BooksService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('findByBookId working', async () => {
        const id = new Types.ObjectId().toHexString();
        booksRepositoryFactory()
            .findById()
            .exec.mockReturnValueOnce([{ bookId: id }]);
        const res = await service.getBook(id);
        expect(res[0].bookId).toBe(id);
    });

    it('findBooks working', async () => {
        booksRepositoryFactory().find().exec.mockReturnValueOnce(books);
        const res = await service.getBooks();
        expect(res).toEqual(books);
    });

    it('create book working', async () => {
        booksRepositoryFactory().create.mockReturnValueOnce(books[0]);
        const res = await service.create(books[0] as CreateBookDTO);
        expect(res).toEqual(books[0]);
    });
    it('update book working', async () => {
        booksRepositoryFactory().findOneAndUpdate.mockReturnValueOnce([
            books[1],
            books[1],
        ]);
        const res = await service.update('0', books[1]);
        expect(res).toEqual([books[1], books[1]]);
    });

    it('delete book working', async () => {
        booksRepositoryFactory().findOneAndRemove.mockReturnValueOnce([
            books[1],
        ]);
        const res = await service.delete('0');
        expect(res).toEqual([books[1]]);
    });
});
