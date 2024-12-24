import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { City, CitySchema } from 'src/cities/entities/city.entity';
import { Hotel, HotelSchema } from './entities/hotel.entity';
import { Service, ServiceSchema } from './entities/service.entity';

@Module({
  imports : [ MongooseModule.forFeature([
        { name: User.name, schema: UserSchema },
        { name: City.name, schema: CitySchema },
        { name: Hotel.name, schema: HotelSchema },
        { name: Service.name, schema: ServiceSchema },
      ]),
    ],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}
