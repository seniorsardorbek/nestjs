import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/_shared/configs';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}


  @UseInterceptors(FilesInterceptor("images", 10, multerOptions))
  @Post()
  create(@UploadedFiles() images: Array<Express.Multer.File>, @Body() createHotelDto: CreateHotelDto) {
    return this.hotelsService.create(createHotelDto , images);
  }

  @Get()
  findAll() {
    return this.hotelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelsService.update(+id, updateHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelsService.remove(+id);
  }
}
