import React from "react";
import { motion } from "framer-motion"; // 👉 Add this import
import about from "./../pic/about/track about.jpeg";

export default function About() {
    return (
        <motion.div className="about-page" initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false, amount: 0.1 }}
        >
            <h2 className="text-center" style={{ marginLeft: '2rem', marginTop: '10px' }}>
                About Our Expense
            </h2>

            <div className="about-container">

                {/* <img src={about} alt="Hostel Building" className="about-image" /> */}
                <motion.img
                    src={about}
                    alt="Hostel Building"
                    className="about-image"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                />

                {/* 👉 Animate this div */}
                <motion.div
                    className="about-text"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <p>
                        Welcome to <strong>Expense Track Management System</strong>, your smart solution for organizing,
                        monitoring, and controlling your personal or business finances with ease and efficiency.
                    </p>

                    <h3>Our Features:</h3>
                    <ul>
                        <li>✅ Simple & User-Friendly Interface</li>
                        <li>✅ Track Income and Daily Expenses</li>
                        <li>✅ Real-Time Balance Overview</li>
                        <li>✅ Category-wise Expense Management</li>
                        <li>✅ Secure Login & Data Protection</li>
                        <li>✅ Responsive Dashboard for Web & Mobile</li>
                    </ul>

                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to empower individuals and small businesses with a reliable and efficient platform for financial tracking —
                        helping you make smarter money decisions and achieve your financial goals.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}
