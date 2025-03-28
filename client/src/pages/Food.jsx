import { useState } from 'react';
import axios from 'axios';
import { useAuth } from "../store/auth";
export const Food = () => {
    const { foods } = useAuth();
    const [selectedFood, setSelectedFood] = useState(null);

    if (!Array.isArray(foods)) {
        return <div>Loading...</div>;
    }

    // Filter foods array based on the need property
    const foodsWithNoNeed = foods.filter(food => food.need === 'Food');

    const initPayment = async (amount) => {
        try {
            if (!selectedFood) {
                console.error("No food item selected.");
                return;
            }

            const orderUrl = "http://localhost:5000/api/payment/orders";
            const { data } = await axios.post(orderUrl, { amount });
            console.log(data);

            const options = {
                key: "rzp_test_kdIXWQNa2RlGLH",
                amount: data.data.amount,
                currency: data.data.currency,
                name: selectedFood.description, // Make sure selectedFood is not null
                description: "Donate Money",
                order_id: data.data.id,
                handler: async (response) => {
                    try {
                        const verifyUrl = "http://localhost:5000/api/payment/verify";
                        const { data } = await axios.post(verifyUrl, response);
                        console.log(data);
                        // Handle success or failure message
                    } catch (error) {
                        console.log(error);
                    }
                },
                theme: {
                    color: "#3399cc",
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDonateMoney = (food) => {
        console.log("Selected food:", food); // Add this log
        setSelectedFood(food);
        console.log("Selected food state:", selectedFood); // Add this log
        initPayment(food.price); // Assuming price property exists in food object
    };
    

    return (
        <section className="section-food">
            <div className="container">
                <h1 className="main-heading">Food</h1>
            </div>
            <div className="container">
                <div className="row">
                    {foodsWithNoNeed.map((curElem, index) => {
                        const { photo, description, place, need, price } = curElem;

                        return (
                            <div className="col-md-6" key={index}>
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img
                                                src={photo}
                                                className="card-img"
                                                alt="photo"
                                                style={{ height: "200px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{description}</h5>
                                                <p className="card-text">Place: {place}</p>
                                                <p className="card-text">Need: {need}</p>
                                                <p className="card-text">Price: {price}</p>
                                                <div className="mt-3">
                                                    <button className="btn btn-primary mr-2 ms-2">Donate Food</button>
                                                    <button className="btn btn-primary mr-2 ms-2" onClick={() => handleDonateMoney(curElem)}>Donate Money</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};