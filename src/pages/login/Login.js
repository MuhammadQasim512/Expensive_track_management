import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
    const Navigate = useNavigate();
    const [formdata, setFormData] = useState({
        email: '',
        password: '',
    })

    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            const respones = await axios.post('http://127.0.0.1:5000/api/login', formdata, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("respons data:", respones.data);
            if (respones.status === 200) {
                toast.success("login successfully");
                Navigate("/income");
            }
            else {
                toast.success('registeration failed')
            }
        } catch (error) {
            console.error("error fetching login")

        }
    }
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    }

    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <h3 className="text-center">Login</h3>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputemail1" className="form-label">Email</label>
                            <input type="email" className="form-control"
                                name="email"
                                placeholder="Enter Yor email"
                                value={formdata.email}
                                onChange={handleOnchange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control"
                                name="password"
                                placeholder="Enter your password"
                                value={formdata.password}
                                onChange={handleOnchange}
                                required />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <div><Link to="/forgotpassword">Forgot password</Link></div>
                        <button type="submit" className="btn btn-primary w-100" onClick={handlelogin}>Login</button>
                        <hr />
                        <div className="text-center" >Don't have an account?<Link to="/register">Sign up</Link> </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )

}