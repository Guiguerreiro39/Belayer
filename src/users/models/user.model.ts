import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
    @Field(type => ID, {description: "ID of the user", nullable: false})
    _id: string;

    @Prop({ required: true})
    @Field()
    name: string

    @Prop({ required: true})
    @Field()
    username: string

    @Prop({ required: true})
    @Field()
    password: string

    @Prop({ required: true, default: new Date()})
    @Field()
    createdAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)