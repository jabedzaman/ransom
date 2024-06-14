import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configs from '@/config';
import { CoreModule } from '@/core';
import { CommonModule, PrismaService } from '@/common';
import { TerminusModule } from '@nestjs/terminus';
import { UsersModule } from '@/modules/users';
import { AuthModule } from '@/auth';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CoreModule,
    CommonModule,
    TerminusModule,
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env', '.env.local'],
      expandVariables: true,
    }),
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
