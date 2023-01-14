import { IBookDTO } from './dto/i-book.dto';

const libraryDB: { books: IBookDTO[] } = {
    books: [
        {
            id: '1',
            title: 'Жизнь Пи',
            authors: 'Янн  Мартел',
            favorite: 'true',
            description:
                'ого века, флагом новой' +
                'культуры.«Жизнь Пи» произвела настоящий культурный взрыв в мировой' +
                'интеллектуальной среде.Фантастическое путешествие юноши и бенгальского' +
                'тигра, описанное в романе, перекликается с повестью «Старик и море», с' +
                'магическим реализмом Маркеса и с абсурдностью Беккета.Книга стала не' +
                'только бестселлером, но и символом литературы нов',
            fileName: '',
            fileBook: '',
            fileCover: '',
        },
        {
            id: '2',
            title: 'Flowers',
            authors: 'Dick Chain Junior',
            favorite: 'false',
            description: 'Good Flowers',
            fileName: '',
            fileBook: '',
            fileCover: '',
        },
        {
            id: '3',
            title: 'Жизнь Пи',
            authors: 'Янн  Мартел',
            favorite: 'true',
            description:
                '«Жизнь Пи» произвела настоящий культурный взрыв в мировой' +
                'интеллектуальной среде.Фантастическое путешествие юноши и бенгальского' +
                'тигра, описанное в романе, перекликается с повестью «Старик и море», с' +
                'магическим реализмом Маркеса и с абсурдностью Беккета.Книга стала не' +
                'только бестселлером, но и символом литературы нового века, флагом новой' +
                'культуры.',
            fileName: '',
            fileBook: '',
            fileCover: '',
        },
        {
            id: '4',
            title: 'Жизнь Пи',
            authors: 'Янн  Мартел',
            favorite: 'true',
            description:
                '«Жизнь Пи» произвела настоящий культурный взрыв в мировой' +
                'интеллектуальной среде.Фантастическое путешествие юноши и бенгальского' +
                'тигра, описанное в романе, перекликается с повестью «Старик и море», с' +
                'магическим реализмом Маркеса и с абсурдностью Беккета.Книга стала не' +
                'только бестселлером, но и символом литературы нового века, флагом новой' +
                'культуры.',
            fileName: '1.pdf',
            fileBook: '1.pdf',
            fileCover: '1.png',
        },
    ],
};

export { libraryDB };