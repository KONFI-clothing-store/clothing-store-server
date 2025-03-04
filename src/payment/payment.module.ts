import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';

import { PaymentController } from './payment.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
  ],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
