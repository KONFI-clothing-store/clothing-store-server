import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';

import { ClothesModule } from './clothes/clothes.module';
import { Clothes } from './clothes/clothes.model';
import { Comment } from './comments/comments.model';
import { CommentsModule } from './comments/comments.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Clothes, Comment],
      autoLoadModels: true,
    }),
    UsersModule,
    ClothesModule,
    CommentsModule,
    PaymentModule,
  ],
})
export class AppModule {}
