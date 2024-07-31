import { HotelSearchDto } from '../../common/dto/hotel-search.dto';

export interface HotelProvider {
  searchHotels(hotelSearchDto: HotelSearchDto): Promise<any>;
}
