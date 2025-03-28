import React, { useState } from 'react';
import { NavLink,useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Orphanage = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [userType, setUserType] = useState('user');
    const navigate = useNavigate();
    const { storetokenInLS } = useAuth();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleRadioChange = (e) => {
        setUserType(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...user, userType }),
            });
            if (response.ok) {
                const res_data = await response.json();
                console.log("res from server", res_data);
                storetokenInLS(res_data.token);
                setUser({
                    username: "",
                    email: "",
                    password: "",
                });
                navigate("/login");
            }
            console.log(response);
        } catch (error) {
            console.log("register", error);
        }
    };

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder py-5">Welcome</h1>
                        <p className="lead text-center">Enter Your Details to Register</p>
                        <div className="mb-3">
                            <input type="radio" id="user" name="userType" value="user" checked={userType === 'user'} onChange={handleRadioChange} />
                            <label htmlFor="user">User</label>
                        </div>
                        <div className="mb-3">
                            <input type="radio" id="orphanage" name="userType" value="orphanage" checked={userType === 'orphanage'} onChange={handleRadioChange} />
                            <label htmlFor="orphanage">Orphanage</label>
                        </div>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">SIGN UP</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Username
                                </label>
                                <input type="text" className="form-control" id="name" name="username" value={user.username} onChange={handleInput} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={user.email} onChange={handleInput} aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={handleInput} />
                            </div>
                            <button type="submit" className="btn btn-primary rounded-pill w-100">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orphanage;
