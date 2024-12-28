import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Flight {
  @Prop({
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'City',
  })
  where: string;

  @Prop({
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'City',
  })
  to: string;

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  when: string;

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
    enum: ['bussiness', 'economy', 'first-class'],
    default: 'economy',
  })
  class: string;

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  duration: string;


  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  plane: string;
}




export const FlightSchema = SchemaFactory.createForClass(Flight);