import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsService } from './items/items.service';
import { ItemsController } from './items/items.controller';
import { AuthzModule } from './authz/authz.module';
import { ConfigModule} from '@nestjs/config';

@Module({
  imports: [AuthzModule, ConfigModule.forRoot({
    envFilePath: `env/${process.env.NODE_ENV || 'development'}.env`
  })],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
