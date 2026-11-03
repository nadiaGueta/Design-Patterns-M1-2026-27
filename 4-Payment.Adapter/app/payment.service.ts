import { StripePayment, PaypalPayment } from "./payment-methode/payment";
import { PaymentGateway } from "./PaymentGateway";

export class PaymentService {
   constructor(private gatway : PaymentGateway){}

    pay(amount: number): void {
    this.gatway.pay(amount);
  }
}
