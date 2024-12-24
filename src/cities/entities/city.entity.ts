import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


@Schema({
    versionKey: false,
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  })
export class City {
     @Prop({
        type: mongoose.SchemaTypes.String,
        required: true,
      })
      name: string;
}

export const CitySchema = SchemaFactory.createForClass(City);

