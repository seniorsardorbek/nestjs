import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './entities/booking.entity';
import { Hotel } from 'src/hotels/entities/hotel.entity';
import { User } from 'src/users/entities/user.entity';
import { calculateDays, convertToNumber } from 'src/_shared/calculate';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    @InjectModel(Hotel.name) private hotelModel: Model<Hotel>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(createBookingDto: CreateBookingDto , req :any) {

    const hotel = await this.hotelModel.findById(createBookingDto.hotel);
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }
    console.log(hotel);
    const user = await this.userModel.findById(req.user?.i);
    console.log(user);
    
    if (!user) {
      throw new NotFoundException('User  not found');
    }
    const duration = calculateDays(createBookingDto.enter_date , createBookingDto.exit_date)
    const price  = duration * convertToNumber(hotel.price);

    return this.bookingModel.create({...createBookingDto  , user :  req.user?.i , price , duration });
  }

 async  findAll() {
    const booking = await this.bookingModel.find();
    return booking;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
