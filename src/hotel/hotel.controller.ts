import { Controller, Post, Body } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelSearchDto } from '../common/dto/hotel-search.dto';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post('search')
  async searchHotels(@Body() hotelSearchDto: HotelSearchDto) {
    return await this.hotelService.searchHotels(hotelSearchDto);
  }
}
