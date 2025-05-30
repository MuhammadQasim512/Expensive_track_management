import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

export default function Register() {
    const navigate = useNavigate();
    const [formdata, setFormData] = useState({
        full_name: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    const handleRegister = async (e) => {
        e.preventDefault();
        if (formdata.password !== formdata.confirm_password) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            const respones = await axios.post('http://127.0.0.1:5000/api/register', formdata, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Respons.data:", respones)
            if (respones.status == 200 || respones.status == 201) {
                toast.success("Registration successful! Redirecting to login...");
                setTimeout(() => navigate("/login"), 800);
            } else {
                toast.success('registeration failed')
            }
        } catch (error) { console.error('Error fetching register'); }

    }
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    }

    return (
        <>
            <div className="signup-container">
                <div className="signup-box">
                    <h3 className="text-center mb-3">Sign up</h3>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputname1" className="form-label">Full name</label>
                            <input
                                type="text"
                                className="form-control"
                                aria-describedby="nameHelp"
                                placeholder="Enter your Full name"
                                value={formdata.full_name}
                                name="full_name"
                                onChange={handleOnchange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputemail1" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={formdata.email}
                                name="email"
                                onChange={handleOnchange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                name="password"
                                value={formdata.password}
                                onChange={handleOnchange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Confrim Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your confirm password"
                                value={formdata.confirm_password}
                                name="confirm_password"
                                onChange={handleOnchange}
                                required />
                        </div>

                        <button type="submit" className="btn btn-primary w-100" onClick={handleRegister}>Register</button>
                        <div className="text-center">have an acount? <Link to="/login">Login</Link></div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )

}