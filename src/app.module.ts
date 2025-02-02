import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';

import { ClothesModule } from './clothes/clothes.module';
import { Clothes } from './clothes/clothes.model';
import { ClothesItemModule } from './clothes_item/clothes_item.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Clothes],
      autoLoadModels: true,
    }),
    UsersModule,
    ClothesModule,
    ClothesItemModule,
    CommentsModule,
  ],
})
export class AppModule {}
