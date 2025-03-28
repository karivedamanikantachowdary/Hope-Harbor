import React, { useState,useEffect } from "react";
import Image from 'react-bootstrap/Image';
import contactphoto from '../images/contactphoto.jpg';
import {useAuth} from "../store/auth";
const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
};

const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData);
    const [userDataLoaded, setUserDataLoaded] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        if (user && !userDataLoaded) {
            setContact({
                ...contact,
                username: user.username,
                email: user.email,
            });
            setUserDataLoaded(true);
        }
    }, [user, contact, userDataLoaded]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(contact),
            });
            if (response.ok) {
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
                alert("Message sent successfully");
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <section id="contact">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">
                                Have Some <b>Questions?</b>
                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Image src={contactphoto} className='w-75' />
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="username"
                                        value={contact.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        name="email"
                                        value={contact.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                        Your Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        name="message"
                                        value={contact.message}
                                        onChange={handleInput}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;