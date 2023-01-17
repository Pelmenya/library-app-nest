import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Books {
    @Prop({ required: true })
    public title: string;

    @Prop()
    public description: string;

    @Prop()
    public authors: string;

    @Prop()
    public favorite: string;

    @Prop()
    public fileCover: string;

    @Prop()
    public fileName: string;

    @Prop()
    public fileBook: string;
}

export type BooksDocument = Books & Document;

export const BooksSchema = SchemaFactory.createForClass(Books);
