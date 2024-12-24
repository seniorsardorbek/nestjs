import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
  versionKey: false,
  timestamps: {
    createdAt: false,
    updatedAt: false
  },
})
export class Service {
  @Prop({
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: false,
  })
  breakfast: boolean;

  @Prop({
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'Hotel',
  })
  hotel: string;

  @Prop({
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: false,
  })
  restoran: boolean;
  @Prop({
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: true,
  })
  wifi: boolean;

  @Prop({
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: true,
  })
  transfer: boolean;

  @Prop({
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: true,
  })
  fitness: boolean;
  @Prop({
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: true,
  })
  pool: boolean;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
