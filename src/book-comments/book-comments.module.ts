import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookComments, BookCommentsSchema } from './book-comments.schema';
import { BookCommentsService } from './book-comments.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: BookComments.name,
                schema: BookCommentsSchema,
            },
        ]),
    ],
    providers: [BookCommentsService],
    exports: [BookCommentsService],
})
export class BookCommentsModule {}
