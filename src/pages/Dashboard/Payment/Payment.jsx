import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckoutForm from "../../../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const Payment = () => {

    const stripePromise = loadStripe('');


    return (
        <div>
            <SectionTitle heading={'Payment'} subheading={'Enroll into the class now'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;