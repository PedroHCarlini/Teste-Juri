import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatajudModule } from './datajud/datajud.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessEntity } from './entities/process.entity';
import { MongooseModule } from '@nestjs/mongoose';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
