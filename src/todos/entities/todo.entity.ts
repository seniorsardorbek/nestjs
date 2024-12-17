import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  versionKey: false,
})
export class Todo {
  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  text: string;

  @Prop({
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  })
  userId: string;

  @Prop({
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  })
  completed: boolean;
}


export const TodoSchema =SchemaFactory.createForClass( Todo);