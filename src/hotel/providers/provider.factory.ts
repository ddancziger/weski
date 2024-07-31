import { Injectable } from '@nestjs/common';
import { HotelProvider1Service } from './hotel-provider1.service';
import { BaseHotelProviderService } from './base-hotel-provider.service';
import { providersConfig } from './providers.config';

@Injectable()
export class ProviderFactory {
  private providers: BaseHotelProviderService[];

  constructor(
    private readonly hotelProvider1Service: HotelProvider1Service, // Add more providers here and inject them
  ) {
    this.providers = [];

    providersConfig.providers.forEach((providerConfig) => {
      if (providerConfig.enabled) {
        switch (providerConfig.name) {
          case 'HotelProvider1Service':
            this.providers.push(this.hotelProvider1Service);
            break;
          // Add more cases here for additional providers
        }
      }
    });
  }

  getProviders(): BaseHotelProviderService[] {
    return this.providers;
  }
}
