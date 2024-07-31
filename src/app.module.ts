import { Module } from '@nestjs/common';
import { HotelModule } from './hotel/hotel.module';
import { HotelGateway } from './hotel/hotel.gateway';

@Module({
  imports: [HotelModule],
})
export class AppModule {}
