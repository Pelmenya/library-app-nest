import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BookComments {
    @Prop({ required: true })
    public bookId: string;

    @Prop({ required: true })
    public comment: string;
}

export type BookCommentsDocument = BookComments & Document;

export const BookCommentsSchema = SchemaFactory.createForClass(BookComments);
