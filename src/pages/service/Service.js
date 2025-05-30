import React from "react";
import { motion } from "framer-motion";
import addExpense from "./../pic/service/addexpense.jpeg"
import income from "./../pic/service/trackincome.jpeg"
import report from "./../pic/service/report.jpeg"
import category from "./../pic/service/cotegory.jpeg"
import dashboard from "./../pic/service/visual.jpeg"
import secure from "./../pic/service/secure.jpeg"
export default function Service() {
  const expenses = [{
    id: 1,
    title: "Add Expense",
    description: "Easily add new expenses with categories and amounts.",
    image: addExpense,
  },
  {
    id: 2,
    title: "Track Income",
    description: "Record and monitor all income sources in one place.",
    image: income,
  },
  {
    id: 3,
    title: "Generate Reports",
    description: "Create detailed reports for daily, monthly, or yearly analysis.",
    image: report,
  },
  {
    id: 4,
    title: "Category Management",
    description: "Manage income and expense categories efficiently.",
    image: category,
  },
  {
    id: 5,
    title: "Visual Dashboard",
    description: "Visualize your financial health with graphs and charts.",
    image: dashboard,
  },
  {
    id: 6,
    title: "Secure Data",
    description: "Your financial data is securely stored and backed up.",
    image: secure,
  },
  ];

  return (
    <motion.div
      className="services"
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <h2 style={{ color: "black", marginBottom: "2rem" }}> Expense management service</h2>
      <div className="service-cards">
        {expenses.map((expense, index) => (
          <motion.div
            key={expense.id}
            className="card"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={expense.image}
              alt={expense.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "1rem",
              }}
            />
            <h3>{expense.title}</h3>
            <p>{expense.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}









// import React from "react";
// import { motion } from "framer-motion";
// import canteen from "./../pic/service/canteen.PNG";
// import furnishedroom from "./../pic/service/furnishedroom.PNG";
// import housekeeping from "./../pic/service/housekeeping.PNG";
// import watchmen from "./../pic/service/watchmen.PNG";
// import wifi from "./../pic/service/wifi.PNG";
// import armedguard from "./../pic/service/armedguard.PNG";

// export default function Service() {
//   const services = [
//     {
//       id: 1,
//       title: "Canteen",
//       description: "Well-furnished rooms with all necessary amenities.",
//       image: canteen,
//     },
//     {
//       id: 2,
//       title: "Furnished Rooms",
//       description: "Safe environment with CCTV surveillance.",
//       image: furnishedroom,
//     },
//     {
//       id: 3,
//       title: "Housekeeping",
//       description: "Nutritious meals served daily.",
//       image: housekeeping,
//     },
//     {
//       id: 4,
//       title: "Watch men",
//       description: "High-speed internet available throughout the hostel.",
//       image: watchmen,
//     },
//     {
//       id: 5,
//       title: "Armed Guards",
//       description: "High-speed internet available throughout the hostel.",
//       image: armedguard,
//     },
//     {
//       id: 6,
//       title: "WiFi",
//       description: "High-speed internet available throughout the hostel.",
//       image: wifi,
//     },
//   ];

//   return (
//     <motion.div className="services"
//       initial={{ y: -50, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, delay: 0.1 }}
//       viewport={{ once: false, amount: 0.1 }}
//     >
//       <h2 style={{ color: "black" }}>Services</h2>
//       <div className="service-cards">
//         {services.map((service, index) => (
//           <motion.div
//             key={service.id}
//             className="card"
//             initial={{ y: 100, opacity: 1 }}  // 👈 All cards animate from center top
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: index * 0.1 }}
//             viewport={{ once: false, amount: 0.1 }}
//           >
//             <img src={service.image} alt={service.title} />
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }
