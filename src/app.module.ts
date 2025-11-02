import crypto from 'crypto';
(global as any).crypto = crypto;

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppService } from './app.service';
import { AuthModule } from './models/auth/auth.module';
import { AppController } from './app.controller';
import { DatajudModule } from './models/datajud/datajud.module';
import { ProcessEntity } from './models/datajud/infra/models/entities/process.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string | undefined>('MONGO_URI');
        if (!uri) {
          throw new Error(
            'MONGO_URI is not defined in environment variables. Please define it in the .env file and restart the application.',
          );
        }
        return { uri };
      },
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string | undefined>('MONGO_URI');
        if (!uri) {
          throw new Error(
            'MONGO_URI is not defined in environment variables. Please define it in the .env file and restart the application.',
          );
        }

        return {
          type: 'mongodb' as const,
          url: uri,
          database: 'develop',
          synchronize: true,
          logging: true,
          autoLoadEntities: true,
          entities: [ProcessEntity],
        };
      },
    }),

    DatajudModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
