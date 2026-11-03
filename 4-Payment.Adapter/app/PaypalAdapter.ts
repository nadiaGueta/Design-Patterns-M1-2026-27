import { PaypalPayment } from "./payment-methode/payment";
import { PaymentGateway } from "./PaymentGateway";

export class PaypalAdapter implements PaymentGateway{


constructor (private payPal : PaypalPayment){

}

    pay(amount: number): void {
       this.payPal.sendPayment(amount , 'EUR')
    }




    
}