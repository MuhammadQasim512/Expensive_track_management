import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import AOS from "aos";
// import "aos/dist/aos.css";

import Room from "../room/Room";
import Service from "../service/Service";
import About from "../about/About";
import ContactUs from "../contactus/Contact";
import Footer from "../footer/Footer";

import expense from "./../pic/home/expense.jpeg";
import syatem from "./../pic/home/system.jpg";
import Managements from "./../pic/home/managements.jpeg";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";

export default function Website() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <motion.div
            style={{ overflowY: "auto", height: '100vh' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Navbar */}
            <nav
                className="navbar"
            >
               <div className="logo">💰 ExpenseTrack</div>
                <ul className={isOpen ? "nav-links open" : "nav-links"}>
                    <li onClick={() => scrollToSection("home")}>Home</li>
                    <li onClick={() => scrollToSection("room")}>Expense track</li>
                    <li onClick={() => scrollToSection("service")}> Services</li>
                    <li onClick={() => scrollToSection("about")}>About</li>
                    <li onClick={() => scrollToSection("contact")}>Contact Us</li>
                </ul>
                <div className="auth-links">
                    <button className="login-btn">
                        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                            Sign in
                        </Link>
                    </button>
                    <button className="signup-btn">
                        <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
                            Sign Up
                        </Link>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="home" id="home">
                <div className="full-width-carousel">
                    <Slider {...settings}>
                        <div className="full-width-slide">
                            <motion.img
                                src={expense}
                                alt="Slide 1"
                                className="slide-image"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 3 }}
                            />
                        </div>
                        <div className="full-width-slide">
                            <motion.img
                                src={syatem}
                                alt="Slide 2"
                                className="slide-image"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 3 }}
                            />
                        </div>
                        <div className="full-width-slide">
                            <motion.img
                                src={Managements}
                                alt="Slide 3"
                                className="slide-image"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 3 }}
                            />
                        </div>
                    </Slider>
                </div>

                {/* Hero Text */}
               <motion.div
    className="hero-text"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
>
    <p>Track, Analyze, and Control Your Hostel Expenses Efficiently.</p>
    <motion.button
        className="cta-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        View Expense Reports
    </motion.button>
</motion.div>

            </div>

            {/* Sections */}
            <section id="features" className="features">
                {/* Add animated feature cards here later */}
            </section>

            <div id="room" data-aos="fade-up">
                <Room />
            </div>

            <div id="service" data-aos="fade-up">
                <Service />
            </div>

            <div id="about" data-aos="fade-up">
                <About />
            </div>

            <div id="contact" data-aos="fade-up">
                <ContactUs />
            </div>

            <Footer />
        </motion.div>
    );
};
































// // src/pages/Home.js
// import React, { useState } from "react";
// import Slider from "react-slick";

// import Room from "../room/Room";
// import Service from "../service/Service";
// import About from "../about/About";
// import ContactUs from "../contactus/Contact";
// import Footer from "../footer/Footer";
// import zero from "./../pic/home/zero.png";
// import hostelroompic from "./../pic/home/hostelroompic.PNG";
// import hostelroompc from "./../pic/home/hostelroompc.PNG";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Link } from "react-router-dom";
// export default function Website() {

//     const [isOpen, setIsOpen] = useState(false);

//     const scrollToSection = (id) => {
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//     };
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         appendDots: dots => (
//             <div>
//                 <ul style={{
//                     margin: "0px", padding: "0px"
//                 }}> {dots} </ul>
//             </div>
//         ),
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1
//                 }
//             }
//         ]
//     };
//     return (
//         <>
//             <div style={{ overflowY: "auto", height: '100vh' }}>
//                 <nav className="navbar">
//                     <div className="logo">🏠 Hostel</div>
//                     <ul className={isOpen ? "nav-links open" : "nav-links"}>
//                         <li onClick={() => scrollToSection("home")}>Home</li>
//                         <li onClick={() => scrollToSection("room")}>Room</li>
//                         <li onClick={() => scrollToSection("service")}>Services</li>
//                         <li onClick={() => scrollToSection("about")}>About</li>
//                         <li onClick={() => scrollToSection("contact")}>Contact Us</li>
//                     </ul>
//                     <div className="auth-links">
//                         <button className="login-btn">
//                             <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
//                                 Sign in</Link></button>
//                         <button className="signup-btn">
//                             <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
//                                 Sign Up</Link></button>
//                     </div>
//                 </nav>

//                     <div className="home">
//                     <div className="full-width-carousel">
//                         <Slider {...settings}>
//                             <div className="full-width-slide">
//                                 <img src={zero}
//                                     alt="Slide 1"
//                                     className="slide-image" />
//                             </div>
//                             <div className="full-width-slide">
//                                 <img src={hostelroompic}
//                                     alt="Slide 2"
//                                     className="slide-image" />
//                             </div>
//                             <div className="full-width-slide">
//                                 <img src={hostelroompc}
//                                     alt="Slide 3"
//                                     className="slide-image" />
//                             </div>
//                         </Slider>
//                     </div>

//                     {/* Text Section */}
//                     <div className="hero-text">
//                         <p>Safe, Comfortable, and Affordable Living for Students.</p>
//                         <button className="cta-button">Book Now</button>
//                     </div>
//                 </div>

//                 {/* Features Section */}
//                 <section id="features" className="features">
                 
//                 </section>
//                 <div id="room">
//                     <Room />
//                 </div>
//                 <div id="service">
//                     <Service />
//                 </div>
//                 <div id="about">
//                     <About />
//                 </div>
//                 <div id="contact">
//                     <ContactUs />
//                 </div>
//                 <Footer />
//             </div>

//         </>
//     );
// };



