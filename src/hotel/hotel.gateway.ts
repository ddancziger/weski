import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, WebSocket } from 'ws';
import { HotelService } from './hotel.service';
import { HotelSearchWithIdDto } from '../common/dto/hotel-search-with-id.dto';

@WebSocketGateway()
export class HotelGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('HotelGateway');

  constructor(private readonly hotelService: HotelService) {}

  afterInit(server: Server) {
    this.logger.log('WebSocket server initialized');
  }

  handleConnection(client: WebSocket) {
    this.logger.log(`Client connected: ${client}`);
    client.on('message', (message: string) => {
      const payload: HotelSearchWithIdDto = JSON.parse(message);
      this.handleSearchHotels(client, payload);
    });
  }

  handleDisconnect(client: WebSocket) {
    this.logger.log(`Client disconnected: ${client}`);
  }

  async handleSearchHotels(client: WebSocket, payload: HotelSearchWithIdDto) {
    console.log(payload);
    const promises = await this.hotelService.searchHotels(payload);
    console.log('promises', promises);
    promises.forEach(async (promise) => {
      promise.then((result) => {
        console.log(JSON.stringify(result));
        client.send(JSON.stringify({ searchId: payload.searchId, result }));
      });
    });
    await Promise.allSettled(promises);

    client.send(JSON.stringify({ searchId: payload.searchId, finish: true }));
  }
}
