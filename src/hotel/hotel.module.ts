import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { HotelGateway } from './hotel.gateway';
import { HotelProvider1Service } from './providers/hotel-provider1.service';
import { ProviderFactory } from './providers/provider.factory';

@Module({
  providers: [
    HotelService,
    HotelGateway,
    HotelProvider1Service,
    ProviderFactory,
  ],
  controllers: [HotelController],
})
export class HotelModule {}
