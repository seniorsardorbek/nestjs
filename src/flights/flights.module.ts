import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { Flight, FlightSchema } from './entities/flight.entity';
import { City, CitySchema } from 'src/cities/entities/city.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Flight.name, schema: FlightSchema },
      { name: City.name, schema: CitySchema },
      { name: City.name, schema: CitySchema },
    ]),
  ],
  controllers: [FlightsController],
  providers: [FlightsService],
})
export class FlightsModule {}
