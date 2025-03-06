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
      url: process.env.DATABASE_URL,
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
