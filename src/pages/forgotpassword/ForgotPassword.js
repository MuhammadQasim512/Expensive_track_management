import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return (
        <>
            <div className="login-container">

                <div className="login-box">
                    <h3 className="text-center mb-4">Forgot password</h3>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputemail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputemail1" required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <div><Link>Forgot password</Link></div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                        <hr />
                        <div className="text-center">Don't have an account?<Link to="/register">Sign up</Link> </div>
                    </form>
                </div>
                
            </div>
        </>
    )

}