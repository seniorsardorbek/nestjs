import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Hotel } from './entities/hotel.entity';
import { Model } from 'mongoose';
import { Service } from './entities/service.entity';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<Hotel>,
    @InjectModel(Service.name) private serviceModel: Model<Service>,
  ) {}
  async create(createHotelDto: CreateHotelDto , images : Array<Express.Multer.File>) {
    console.log(images);
    const hotelImages = images.map(image => ( image.filename ));
    const hotelData = new this.hotelModel({ ...createHotelDto , images : hotelImages });
    const hotel = await hotelData.save();
    const serviceData = new this.serviceModel({ hotel: hotel?._id });
    const services = await serviceData.save();
    return { hotel, services };
  }

  findAll() {
    return this.hotelModel.find().populate('services');
  }

  findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
