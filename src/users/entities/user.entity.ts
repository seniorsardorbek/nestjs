import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class User {
  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  full_name: string;

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  })
  phonenumber: string;

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
    default: 'user',
  })
  role: string;

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
