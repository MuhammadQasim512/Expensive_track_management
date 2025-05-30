import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import "./sass/Main.scss";

// Pages
import SideMenu from "./pages/side-menu/SideMenu";
import Income from "./pages/income/Income";
import Expensive from "./pages/expensive/Expensive";
import Balance from "./pages/balance/Balance";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Website from "./pages/website/Website";

// Protected layout for dashboard pages
function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div className="leftside">
        <SideMenu />
      </div>
      <div className="rightside">
        <div className="header">
          <h1>Expense Track Management</h1>
        </div>
        <div style={{ overflowY: "scroll" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/" element={<Website />} />

      {/* Dashboard Routes with layout */}
      <Route path="/income" element={<DashboardLayout><Income /></DashboardLayout>} />
      <Route path="/expensive" element={<DashboardLayout><Expensive /></DashboardLayout>} />
      <Route path="/balance" element={<DashboardLayout><Balance /></DashboardLayout>} />

      {/* Catch-all route (optional) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}






// import React from "react";
// // import "./App.css";
// import "./sass/Main.scss";
// import SideMenu from "./pages/side-menu/SideMenu";
// import Income from "./pages/income/Income";
// import Expensive from "./pages/expensive/Expensive";
// import { Route, Routes, useLocation, Navigate } from "react-router-dom";
// import Balance from "./pages/balance/Balance";
// import Register from "./pages/register/Register";
// import Login from "./pages/login/Login";
// import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
// import Website from "./pages/website/Website";

// export default function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgotpassword" element={<ForgotPassword />} />
//       </Routes>
//       <Routes>
//         <Route path="/" element={<Website />} />
//       </Routes>

//       <div style={{ display: 'flex' }}>
//         <div className="leftside" >
//           <SideMenu />
//         </div>
//         <div className="rightside" >
//           <div className="header">
//             <h1>Expensive track management</h1>
//           </div>
//           <div style={{ overflowY: 'scroll' }}>
//             <Routes>
//               <Route path="/income" element={<Income />} />
//               <Route path="/expensive" element={<Expensive />} />
//               <Route path="/balance" element={<Balance />} />
//             </Routes>
//           </div>
//         </div>
//       </div>



//     </>
//   )
// }