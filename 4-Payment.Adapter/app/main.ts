import { PaypalPayment, StripePayment } from "./payment-methode/payment";
import { PaymentService } from "./payment.service";
import { PaypalAdapter } from "./PaypalAdapter";
import { StripeAdapter } from "./StripeAdapter";

function main() {
  console.log("Payment Adapter Example");
const stripe = new StripeAdapter(new StripePayment()) ; 
  const service = new PaymentService(stripe);
  service.pay(100)

  const payPal = new PaypalAdapter(new PaypalPayment())

  const service2 = new PaymentService(payPal)
  service2.pay(100) ; 
}
main();
