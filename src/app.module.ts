import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { CitiesModule } from './cities/cities.module';
import { HotelsModule } from './hotels/hotels.module';
import { FlightsModule } from './flights/flights.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [ MongooseModule.forRoot(`mongodb://127.0.0.1:27017/nestapp`) , UsersModule, AuthModule, CitiesModule, HotelsModule, FlightsModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService ,],
})
export class AppModule {}
