import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "../styles/register.css"


import { Context } from "..";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/patient/register",
          { firstName, lastName, email, phone, nic, dob, gender, password  , role : "Patient"},
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNic("");
          setDob("");
          setGender("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div  id="let" className="container form-component register-form">
        <h2  className="lets"    id="lets" >Sign Up</h2>
        <p  className="psl"  >Please Sign Up To Continue</p>
        <p className="ppl"  >
        Welcome to our PeopleCare Interrnational Hospital . We are happy to provide you the world best medical treatment here ...
        </p>
        <form onSubmit={handleRegistration}>
          <div>
            <h2 id="let" >Name*</h2>
            <input
            id="nm"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          
          <div>
            <h2 id="let" >Email*</h2>
            <input
            id
            ="mail"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
              <h2 id="let" >Phone*</h2>
            <input
            id="ph"
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          
          <div>
            <div>
              <h2 id="let" >NIC*</h2>
            <input
            id="nic"
              type="number"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            </div>
            <div  id="db"  >
              <h2 id="let" >DOB*</h2>
            <input

              type={"date"}
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            </div>
          </div>
          <div>
            <div>
              <h2 id="let" >Gender*</h2>
            <select id="gen"  value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            </div>
            <div id="pss"  >
              <h2 id="let" >Password*</h2>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
          </div>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            <Link
              to={"/signin"}
              style={{ textDecoration: "none", color: "#3CD3AD" }}
            >
              Login Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button  id="bt" type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;