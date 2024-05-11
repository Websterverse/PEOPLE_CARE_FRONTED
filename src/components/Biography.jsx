// import React from 'react'
import "../styles/bio.css"
// const Biography = ({imageUrl}) => {
//   return (
//     <>

// <div className="container biography">
//         <div className="banner">
//           <img src={imageUrl} alt="whoweare" />
//         </div>
//         <div className="banner">
//           <p>Biography</p>
//           <h3>Who We Are</h3>
//           <p>
            
// "Welcome to People Care International Hospital, where compassion meets expertise in healthcare. Our story begins with a profound commitment to serving our community, rooted in the values of integrity, empathy, and excellence.

// Established with the vision of providing comprehensive and compassionate medical care, People Care International Hospital has evolved into a beacon of hope and healing for countless individuals and families.          </p>
//           {/* <p>We are all in 2024!</p> */}
//           <p>At the heart of our hospital is a team of dedicated healthcare professionals who embody the spirit of service and innovation. From our skilled physicians and nurses to our administrative staff and support personnel, each member of our team plays a vital role in ensuring the well-being of our patients.</p>
//           <p>
//           As a community-focused institution, we believe in giving back and making a positive impact beyond the walls of our hospital. Through various outreach programs, health education initiatives, and partnerships with local organizations, we strive to empower individuals to take control of their health and lead fulfilling lives.
//           </p>
//           <p>Thank you for choosing People Care International Hospital, where your health and well-being are our top priorities."</p>
          
//         </div>
//       </div>




//     </>
//   )
// }

// export default Biography



import React from 'react'
// import "./bio.css"
import { FaUserDoctor } from "react-icons/fa6";
import { IoIosPulse } from "react-icons/io";
import { IoBandageSharp } from "react-icons/io5";
import { BiSolidFirstAid } from "react-icons/bi";
const Bio = () => {
  return (
    <>

     <div className='a' >
<center>
<div className='t'  id='t' >
<h1   >WELCOME TO OUR  <span> HEALTHCARE </span>  </h1>
<h2>Our medical specialiats care about you & your family's health</h2>
</div>
</center>


<div  className='boxes' >

<div  className='q' id='q'  >
   
<div className='dd' >
<FaUserDoctor id='dd' />
</div>

<h3 id='z' >HealthCare Professionals</h3>

<div className='ddd' >
<IoIosPulse id='ddd'   />
</div>

{/* <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet at minima amet libero, necessitatibus, obcaecati blanditiis ratione voluptatem quam alias doloremque autem et dolorem? Pariatur libero necessitatibus id dignissimos harum?</h4> */}
<h4 id='zz' >Healthcare professionals dedicate themselves to caring for others, promoting wellness, and alleviating suffering with expertise and compassion.</h4>


<button id='bt'  className='bttt' >Learn More</button>


</div>


{/*  2nd */}



<div  className='q' id='q'  >
   
<div className='dd' >
<BiSolidFirstAid id='dd'   />
</div>

<h3 id='dbz' className='zzz'  >Medical Excellence</h3>

<div className='ddd' >
<IoIosPulse id='ddd'   />
</div>

{/* <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet at minima amet libero, necessitatibus, obcaecati blanditiis ratione voluptatem quam alias doloremque autem et dolorem? Pariatur libero necessitatibus id dignissimos harum?</h4> */}
<h4 id='zz' >  
Medical excellence in our healthcare system ensures high-quality, evidence-based care, leading to improved health outcomes and patient satisfaction.</h4>


<button id='bt'  className='bttt' >Learn More</button>


</div>

{/* 3rd */}


<div  className='q' id='q'  >
   
<div className='dd' >
<IoBandageSharp id='dd' />
</div>

<h3 id='z' >Latest Technologies</h3>

<div className='ddd' >
<IoIosPulse id='ddd'   />
</div>

{/* <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet at minima amet libero, necessitatibus, obcaecati blanditiis ratione voluptatem quam alias doloremque autem et dolorem? Pariatur libero necessitatibus id dignissimos harum?</h4> */}
<h4 id='zz' >
Cutting-edge technologies revolutionize healthcare, enhancing diagnostics and  driving innovation and improved outcomes.</h4>


<button id='bt'  className='bttt' >Learn More</button>


</div>




     </div>

     </div>



    </>
  )
}

export default Bio


