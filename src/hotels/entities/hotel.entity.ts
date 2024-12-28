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
export class Hotel {
  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  name: string;

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  location: string;

  @Prop({
    type: mongoose.SchemaTypes.Number,
    required: true,
    default: 5,
  })
  star: number;
  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  description: string;

  @Prop({
    type: mongoose.SchemaTypes.Array,
    default: [],
  })
  images: string[];

  @Prop({
    type: Object,
  })
  loc: {
    type: {
      type: string;
      enum: ['Point'];
      default: 'Point';
    };
    coordinates: {
      type: [number];
      required: true;
      index: '2dsphere';
    };
  };

  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
  })
  price: string;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);

HotelSchema.virtual('services', {
  ref: 'Service',
  localField: '_id',
  foreignField: 'hotel',
  justOne: true,
});

HotelSchema.index({ loc: '2dsphere' });
