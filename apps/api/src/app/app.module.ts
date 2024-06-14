import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configs from '@/config';
import { CoreModule } from '@/core';

@Module({
  imports: [
    CoreModule,
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env', '.env.local'],
      expandVariables: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
