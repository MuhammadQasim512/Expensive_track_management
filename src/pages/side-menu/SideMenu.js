import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faWallet, faBars } from "@fortawesome/free-solid-svg-icons";

export default function SideMenu() {
    const [show, setShow] = useState(false);

    const toggleSidebar = () => setShow(!show);

    return (
        <>
            <div>
                <button className="btn btn-light position-fixed top-0  m-2 " onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Sidebar */}
                <div className={`offcanvas offcanvas-start ${show ? 'show' : ''}`} tabIndex="-1" style={{ visibility: show ? 'visible' : 'hidden' }}>
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">Side Menu</h5>
                        <button type="button" className="btn-close" onClick={toggleSidebar}></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column gap-3">
                        <Link to="/income" className="btn btn-outline-primary text-start" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faArrowDown} className="me-2" />
                            Income
                        </Link>
                        <Link to="/expensive" className="btn btn-outline-danger text-start" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faArrowUp} className="me-2" />
                            Expensive
                        </Link>
                        <Link to="/balance" className="btn btn-outline-success text-start" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faWallet} className="me-2" />
                            Balance
                        </Link>
                    </div>
                </div>
                {/* Static sidebar on desktop */}
                <div className="d-none d-md-block bg-light p-3 " style={{ width: "250px", height: "100vh", position: "fixed" }}>
                    <h5>Side Menu</h5>
                    <div className="d-flex flex-column gap-3 mt-4">
                        <Link to="/income" className="btn btn-outline-primary text-start">
                            <FontAwesomeIcon icon={faArrowDown} className="me-2" />
                            Income
                        </Link>
                        <Link to="/expensive" className="btn btn-outline-danger text-start">
                            <FontAwesomeIcon icon={faArrowUp} className="me-2" />
                            Expensive
                        </Link>
                        <Link to="/balance" className="btn btn-outline-success text-start">
                            <FontAwesomeIcon icon={faWallet} className="me-2" />
                            Balance
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}











// import React from "react";
// import { Link } from "react-router-dom";
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown, faArrowUp, faWallet } from '@fortawesome/free-solid-svg-icons';



// export default function SideMenu() {
//     return (
//         <>

//             <div >
//                 <Sidebar>
//                     <Menu className="sidemenucontent">
// <MenuItem component={<Link to="/income" />}
//     icon={<FontAwesomeIcon icon={faArrowDown} />} > Income</MenuItem>
// <MenuItem component={<Link to="/expensive" />}
//     icon={<FontAwesomeIcon icon={faArrowUp} />}> Expensive</MenuItem>
// <MenuItem component={<Link to="/balance" />}
//     icon={<FontAwesomeIcon icon={faWallet} />}> Balance</MenuItem>
//                     </Menu>
//                 </Sidebar>;
//             </div>

//         </>
//     )
// }


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown, faArrowUp, faWallet, faBars } from '@fortawesome/free-solid-svg-icons';

// export default function SideMenu() {
//     const [isCollapsed, setIsCollapsed] = useState(false);
//     const [showHamburger, setShowHamburger] = useState(false);

//     const toggleSidebar = () => {
//         setIsCollapsed(!isCollapsed);
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth <= 768) {
//                 setIsCollapsed(true); // mobile mein sidebar hide
//                 setShowHamburger(true); // hamburger button show
//             } else {
//                 setIsCollapsed(false); // desktop mein sidebar open
//                 setShowHamburger(false); // hamburger button hide
//             }
//         };

//         handleResize(); // jab page load ho to bhi check ho

//         window.addEventListener('resize', handleResize); // resize pe listen karo
//         return () => window.removeEventListener('resize', handleResize); // cleanup
//     }, []);

//     return (
//         <>
//             {/* Hamburger Button */}
//             {showHamburger && (
//                 <button className="hamburger-btn" onClick={toggleSidebar}>
//                     <FontAwesomeIcon icon={faBars} />
//                 </button>
//             )}

//             {/* Sidebar */}
//             <Sidebar collapsed={isCollapsed} className="custom-sidebar">
//                 <Menu className="sidemenucontent">
//                     <MenuItem component={<Link to="/income" />}
//                         icon={<FontAwesomeIcon icon={faArrowDown} />} > Income</MenuItem>
//                     <MenuItem component={<Link to="/expensive" />}
//                         icon={<FontAwesomeIcon icon={faArrowUp} />}> Expensive</MenuItem>
//                     <MenuItem component={<Link to="/balance" />}
//                         icon={<FontAwesomeIcon icon={faWallet} />}> Balance</MenuItem>
//                 </Menu>
//             </Sidebar>
//         </>
//     );
// }



