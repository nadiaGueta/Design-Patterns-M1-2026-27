import { ApplePayPayment } from "./payment-methode/payment";
import { PaymentGateway } from "./PaymentGateway";

export class ApplePayAdapter implements PaymentGateway{


    constructor(private applePay :  ApplePayPayment){}
    pay(amount: number): void {
        this.applePay.processTransaction(amount , "eur")
    }



    
}