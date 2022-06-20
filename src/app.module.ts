import { Module } from '@nestjs/common';
import { ChatGateway } from 'src/gateway/chat.gateway';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ChatGateway],
})
export class AppModule {}
