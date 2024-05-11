// import React from "react";
// import Hero from "../components/Hero";
// import AppointmentForm from "../components/AppointmentForm";

// const Appointment = () => {
//   return (
//     <>
//       <Hero
//         title={"Schedule Your Appointment | ZeeCare Medical Institute"}
//         imageUrl={"/signin.png"}
//       />
//       <AppointmentForm/>
//     </>
//   );
// };

// export default Appointment;



import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
// import './Appointment.css'
import "../styles/appointment.css"
const Appointment = () => {
  return (
    <>
       
 
         <Hero
        title={"Schedule Your Appointment | PeopleCare International Institute"}
        imageUrl={"/signin.png"}
      />    


      <AppointmentForm/>
    </>
  );
};

export default Appointment;

