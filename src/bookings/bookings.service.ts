import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './entities/booking.entity';
import { Hotel } from 'src/hotels/entities/hotel.entity';
import { User } from 'src/users/entities/user.entity';

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
    const user = await this.userModel.findById(req.user?.i);
    console.log(user);
    
    if (!user) {
      throw new NotFoundException('User  not found');
    }

    return this.bookingModel.create({...createBookingDto  , user :  req.user?._id , });
  }

  findAll() {
    return `This action returns all bookings`;
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
