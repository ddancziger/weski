import { HotelSearchDto } from './hotel-search.dto';

export interface HotelSearchWithIdDto extends HotelSearchDto {
  searchId: string;
}
