import { Injectable } from '@nestjs/common';
import { HotelSearchDto } from '../common/dto/hotel-search.dto';
import { ProviderFactory } from './providers/provider.factory';

@Injectable()
export class HotelService {
  constructor(private readonly providerFactory: ProviderFactory) {}

  async searchHotels(hotelSearchDto: HotelSearchDto) {
    const providers = this.providerFactory.getProviders();
    const promises = providers.flatMap((provider) =>
      Array.from({ length: 3 }, (_, i) => {
        const newPayload = {
          ...hotelSearchDto,
          group_size: hotelSearchDto.group_size + i,
        };
        return provider.searchHotels(newPayload);
      }),
    );

    return promises;
  }
}
