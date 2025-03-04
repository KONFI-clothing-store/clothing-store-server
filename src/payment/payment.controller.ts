import { Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('/api/v1/payment-intent')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get('')
  getPaymentData() {
    return { data: 'payment' };
  }

  @Post('')
  async createPaymentIntent() {
    const paymentIntent = await this.paymentService.createPaymentIntent();
    return { clientSecret: paymentIntent };
  }
}
