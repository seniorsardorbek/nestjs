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
export class Booking {
  @Prop({
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'Hotel',
  })
  hotel: string;

  @Prop({
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'User',
  })
  user: string;

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  duration: string;

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  price: string;

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  enter_date: string;

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  exit_date: string;
}


const BookingSchema = SchemaFactory.createForClass(Booking);
export default  BookingSchema