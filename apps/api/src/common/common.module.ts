import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from '@/config';
import { PrismaService } from './services/database/prisma.service';

@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env', '.env.local'],
      expandVariables: true,
    }),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class CommonModule {}
