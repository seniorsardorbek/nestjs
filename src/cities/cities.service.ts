import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { Model } from 'mongoose';
import { City } from './entities/city.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City.name) private cityModel: Model<City>) {}
  async create(createCityDto: CreateCityDto) {
    return await this.cityModel.create(createCityDto);
  }

  async findAll() {
    return this.cityModel.find();
  }

  async findOne(id: string) {
    return this.cityModel.findById(id);
  }

 
 async remove(id: string) {
  return this.cityModel.findByIdAndDelete(id);
  }
}
