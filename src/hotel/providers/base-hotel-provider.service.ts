import { HotelProvider } from './hotel-provider.interface';
import { HotelSearchDto } from '../../common/dto/hotel-search.dto';

export abstract class BaseHotelProviderService implements HotelProvider {
  abstract searchHotels(hotelSearchDto: HotelSearchDto): Promise<any>;
}
