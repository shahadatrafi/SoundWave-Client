import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckoutForm from "../../../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Payment = () => {

    const [price, setPrice] = useState('');
    const [enrolledClassItem, setEnrolledClassItem] = useState([]);

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/carts/${id}`)
            .then(res => res.json())
            .then(data => {
                setEnrolledClassItem(data)
                setPrice(parseFloat(data.price).toFixed(2))   
        })
    }, [id])

    console.log(price);
    


    const stripePromise = loadStripe(import.meta.env.VITE_PK);


    return (
        <div className="w-full max-w-xl">
            <SectionTitle heading={'Payment'} subheading={'Enroll into the class now'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} enrolledClassItem={ enrolledClassItem} />
            </Elements>
        </div>
    );
};

export default Payment;