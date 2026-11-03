import { StripePayment } from "./payment-methode/payment";
import { PaymentGateway } from "./PaymentGateway";

export class StripeAdapter  implements PaymentGateway {


     constructor(private stripe: StripePayment) {}
    pay(amount: number): void {
       this.stripe.makePayment( amount * 100) ; 
    }



    
}