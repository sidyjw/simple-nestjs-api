import { TesteJSController } from './testejs.controller';
import { TesteController } from './teste.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
        TesteJSController, 
        TesteController, AppController],
  providers: [AppService],
})
export class AppModule {}
