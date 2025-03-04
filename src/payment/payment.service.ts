import { Injectable } from '@nestjs/common';
import axios from 'axios';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  async createPaymentIntent() {
    try {
      const response = await axios.post(
        'https://vendors.paddle.com/api/2.0/order',
        {
          vendor_id: '219236',
          vendor_auth_code:
            '6155408bcea11d6811024806caeebdfb6b0cfa8c2e4bd95bf0',
          customer_email: 'matveevdenis458@gmail.com',
          amount: 9.99,
          currency: 'USD',
        },
      );

      console.log('Paddle response:', response.data); // Додайте це для перевірки відповіді
      return response.data;
    } catch (error) {
      console.error(
        'Error from Paddle:',
        error.response ? error.response.data : error.message,
      );
      throw error; // щоб повернути помилку клієнту
    }
  }
}
