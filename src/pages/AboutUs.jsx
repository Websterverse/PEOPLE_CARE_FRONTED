import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import "../styles/ik.css"
import { FaUserDoctor } from "react-icons/fa6";
import { FaBedPulse } from "react-icons/fa6";
import { LuMicroscope } from "react-icons/lu";
import { FaAmbulance } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      
<div className='mains' >
<div className='ab' >
<div className='l' >
</div>

<div className='r' >
    <div>
<h2 className='ba' >ABOUT US</h2>

<h1  className='best' >Best Medical Care For Yourself and Your Family</h1>

<h3 className='in' >Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</h3>

<div className='ic' id='ic' >

<div className='ic1'>
<FaUserDoctor className='IC1' />
<h2 className='q' >Qualified</h2>
<h2 className='d' >Doctors</h2>
</div>




<div className='ic1   ic2'>
<FaBedPulse className='IC1' />
<h2 className='q' >Emergency</h2>
<h2 className='d' >Services</h2>
</div>


<div className='ic1  ic3'>
<LuMicroscope className='IC1' />
<h2 className='q' >Accurate</h2>
<h2 className='d' >Testing</h2>
</div>

<div className='ic1  ic4'>
<FaAmbulance className='IC1' />
<h2 className='q  qq' >Free</h2>
<h2 className='d' >Ambulance</h2>
</div>


</div> 


</div>
</div>
</div>
</div>




















      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;