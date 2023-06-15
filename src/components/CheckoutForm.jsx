import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";


const CheckoutForm = ({ price, enrolledClassItem
}) => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${token}`
            },
            body: JSON.stringify({price})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.clientSecret)
                setClientSecret(data.clientSecret)
        })
        }
    },[price, token])

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        
        console.log('paymentIntent is', paymentIntent)
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // information of enrolled classes
            const enrolledClass = {
                email: user?.email,
                TransactionId: paymentIntent.id,
                className: enrolledClassItem.name,
                classId: enrolledClassItem._id,
                cartClassId: enrolledClassItem.classId,
                price,
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(enrolledClass)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                    // 
                }
            })
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-center">
                <button className="btn btn-info btn-outline  mt-8 btn-wide " type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
                </div>
            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
            {transactionId && <p className="text-green-500 mt-8">Transaction successful with transactionId: {transactionId}</p>}

        </div>
    );
};

export default CheckoutForm;