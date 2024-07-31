import { Injectable } from '@nestjs/common';
import { HotelSearchDto } from '../../common/dto/hotel-search.dto';
import axios from 'axios';
import { BaseHotelProviderService } from './base-hotel-provider.service';

@Injectable()
export class HotelProvider1Service extends BaseHotelProviderService {
  async searchHotels(hotelSearchDto: HotelSearchDto): Promise<any> {
    const response = await axios.post(
      'https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator',
      {
        query: hotelSearchDto,
      },
    );
    return response.data.body &&
      response.data.body.success === 'true' &&
      response.data.body.accommodations
      ? response.data.body.accommodations
      : [];
  }
}
