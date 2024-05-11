import React from "react";
import "../styles/hero.css"
import { Link } from "react-router-dom";
const Hero = ({ title, imageUrl }) => {
  return (
    <>
      {/* <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          People Care International Hospital embraces diversity as a cornerstone of our healing ethos, ensuring that every patient receives personalized care tailored to their unique needs and cultural backgrounds.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div> */}



<div className='hera' >

<div className='texts' >
<h2>WELCOME TO PEOPLECARE</h2>
<h1>Best Healthcare Solution</h1>
<h1>In Your City</h1>
</div>

<div className='btnn' >
<button className='btn1  btn2 ' >Find Doctor</button>
<button id="btn3"  className='btn1 btn3  '  to={"/appointment"}  >Appointment</button>
{/* <Link     id="btn3"  className='btn1 btn3  '  to={"/appointment"}  > Appointment </Link> */}
</div>

</div>




    </>
  );
};

export default Hero;