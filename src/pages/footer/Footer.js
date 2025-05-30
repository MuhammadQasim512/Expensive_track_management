import React from "react";
import { motion } from "framer-motion";
// import wadaniHostelColor from "./../pic/footer/wadaniHostelColor.png";


export default function Footer() {
    return (
        <motion.div
            initial={{ y: -50, opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <motion.div className="col-xl-4 col-lg-4 mb-50"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.3 }}>
                                <div className="footer-widget">
                                    <div class="footer-text">
                                        <p>  Our Expense Track Management System helps you stay on top of your finances.
                                            Easily record income and expenses, analyze spending patterns, and generate insightful reports
                                            — all in one place. Stay organized and in control of your financial goals.
                                        </p>
                                    </div>

                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Expense Track Management</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Dashboard</a></li>
                                        <li><a href="#">Add Expense</a></li>
                                        <li><a href="#">Income Records</a></li>
                                        <li><a href="#">Expense Reports</a></li>
                                        <li><a href="#">Categories</a></li>
                                        <li><a href="#">Monthly Summary</a></li>
                                        <li><a href="#">User Profile</a></li>
                                        <li><a href="#">Settings</a></li>
                                        <li><a href="#">Help & Support</a></li>
                                        <li><a href="#">Logout</a></li>
                                    </ul>
                                </div>
                            </div>

                            <motion.div className="col-xl-4 col-lg-4 col-md-6 mb-50"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.3 }}>
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i class="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </footer >
            <motion.footer className="footer"
                initial={{ y: 50, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: false, amount: 0.1 }}
            >
                <p>
                    © {new Date().getFullYear()} Powered by <strong>Expense Track</strong> — Your trusted hostel finance manager.
                </p>
            </motion.footer>

        </motion.div>
    );
}
