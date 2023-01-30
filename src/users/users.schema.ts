import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Users {
    @Prop({ required: true, unique: true })
    public email: string;

    @Prop({ required: true })
    public password: string;

    @Prop({ required: true })
    public firstName: string;
}

export type UsersDocument = Users & Document;

export const UsersSchema = SchemaFactory.createForClass(Users);
