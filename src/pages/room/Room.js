import React from "react";
import { motion } from "framer-motion";
import water from "./../pic/gallery/waterbill.jpeg";
import manatance from "./../pic/gallery/manatance.jpeg";
import electricity from "./../pic/gallery/bill.jpeg";



const expenses = [
    {
        id: 1,
        item: "Electricity Bill",
        amount: "$120",
        date: "2025-05-01",
        category: "Utilities",
        image: electricity
    },
    {
        id: 2,
        item: "Water Bill",
        amount: "$40",
        date: "2025-05-02",
        category: "Utilities",
        image: water

    },
    {
        id: 3,
        item: "Maintenance Fee",
        amount: "$75",
        date: "2025-05-05",
        category: "Repairs",
        image: manatance
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: index * 0.3,
            ease: "easeOut"
        }
    }),
};
const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
};

export default function Room() {
    return (
        <motion.div className="expense-page"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false, amount: 0.1 }}
        >
            <h2 className="text-center" style={{ marginBottom: "2rem" }}>Expense Tracker</h2>
            <div className="expense-container">
                {expenses.map((expense, index) => (
                    <motion.div
                        key={expense.id}
                        className="expense-card"
                        variants={cardVariants}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <img
                            src={expense.image}
                            alt={expense.item}
                            className="expense-image"
                            variants={imageVariants}
                            style={{
                                width: "100%",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "10px",
                                marginBottom: "1rem"
                            }}
                        />
                        <h3>{expense.item}</h3>
                        <p>💵 Amount: {expense.amount}</p>
                        <p>📅 Date: {expense.date}</p>
                        <p>🏷️ Category: {expense.category}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}














// ---------------------------------hostel mangement syatem mein room ka data--------------------------

// import React from "react";
// import { motion } from "framer-motion";
// import gallery from "./../pic/gallery/gallery.PNG";
// import gallery2 from "./../pic/gallery/gallery2.PNG";
// import gallery3 from "./../pic/gallery/gallery3.PNG";

// const rooms = [
//     {
//         id: 1,
//         type: "Single Room",
//         price: "$3000/month",
//         facilities: ["WiFi", "AC", "Attached Bath", "Study Table"],
//         image: gallery,
//     },
//     {
//         id: 2,
//         type: "Double Room",
//         price: "$5000/month",
//         facilities: ["WiFi", "Fan", "Shared Bathroom", "Wardrobe"],
//         image: gallery2,
//     },
//     {
//         id: 3,
//         type: "Shared Room",
//         price: "$8000/month",
//         facilities: ["WiFi", "Common Area", "Shared Bathroom", "Storage Space"],
//         image: gallery3,
//     },
// ];

// // ✨ Animation Variants
// const cardVariants = {
//     hidden: { opacity: 0, y: 60 },
//     visible: (index) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.8,
//             delay: index * 0.3,
//             ease: "easeOut"
//         }
//     }),
// };

// const imageVariants = {
//     hidden: { scale: 1.1, opacity: 0 },
//     visible: {
//         scale: 1,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             ease: "easeOut"
//         }
//     }
// };

// export default function Room() {
//     return (
//         <motion.div className="room-page"
//             initial={{ y: -50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             viewport={{ once: false, amount: 0.1 }}
//         >
//             <h2 className="text-center" style={{ marginBottom: "2rem" }}>Hostel Rooms</h2>
//             <div className="room-container">
//                 {rooms.map((room, index) => (
//                     <motion.div
//                         key={room.id}
//                         className="room-card"
//                         variants={cardVariants}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: index * 1 }}
//                         viewport={{ once: true, amount: 0.3 }}
//                     >
//                         <motion.img
//                             src={room.image}
//                             alt={room.type}
//                             className="room-image"
//                             variants={imageVariants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: false }}
//                         />
//                         <h3>{room.type}</h3>
//                         <p className="price">{room.price}</p>
//                         <ul>
//                             {room.facilities.map((facility, idx) => (
//                                 <li key={idx}>✅ {facility}</li>
//                             ))}
//                         </ul>
//                     </motion.div>
//                 ))}
//             </div>
//         </motion.div>
//     );
// }







































// import React from "react";
// import { motion } from "framer-motion";
// import gallery from "./../pic/gallery/gallery.PNG";
// import gallery2 from "./../pic/gallery/gallery2.PNG";
// import gallery3 from "./../pic/gallery/gallery3.PNG";

// const rooms = [
//     {
//         id: 1,
//         type: "Single Room",
//         price: "$3000/month",
//         facilities: ["WiFi", "AC", "Attached Bath", "Study Table"],
//         image: gallery,
//     },
//     {
//         id: 2,
//         type: "Double Room",
//         price: "$5000/month",
//         facilities: ["WiFi", "Fan", "Shared Bathroom", "Wardrobe"],
//         image: gallery2,
//     },
//     {
//         id: 3,
//         type: "Shared Room",
//         price: "$8000/month",
//         facilities: ["WiFi", "Common Area", "Shared Bathroom", "Storage Space"],
//         image: gallery3,
//     },
// ];

// export default function Room() {
//     return (
//         <div className="room-page">
//             <h2>Hostel Rooms</h2>
//             <div className="room-container">
//                 {rooms.map((room, index) => (
//                     <motion.div
//                         key={room.id}
//                         className="room-card"
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: index * 1 }}
//                         viewport={{ once: true, amount: 0.3 }}
//                     >

//                         <motion.img
//                             src={room.image}
//                             alt={room.type}
//                             className="room-image"
//                             initial={{ scale: 1.1 }}
//                             whileInView={{ scale: 1 }}
//                             transition={{ duration: 1.2 }}
//                             viewport={{ once: true }}
//                         />
//                         <h3>{room.type}</h3>
//                         <p className="price">{room.price}</p>
//                         <ul>
//                             {room.facilities.map((facility, idx) => (
//                                 <li key={idx}>✅ {facility}</li>
//                             ))}
//                         </ul>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// }

