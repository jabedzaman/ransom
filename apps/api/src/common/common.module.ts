import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from '@/config';
import { PrismaService } from './services/database/prisma.service';
import { ArgonService } from './services/security/argon.service';

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
  providers: [PrismaService, ArgonService],
  exports: [PrismaService, ArgonService],
})
export class CommonModule {}
