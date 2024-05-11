// import React from 'react'

// const MessageForm = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default MessageForm


import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "../styles/message.css" 

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
            "http://localhost:4000/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container1 form message-forms">
        <h2 className="send" >Send Us A Message</h2>
        <form onSubmit={handleMessage}>
          <div>
           <h2 className="name" >Name*</h2>

            <input
            id="n"
              type="text"
              className="mssg"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          
            <input
            
              type="text"
              className="mssg"
              placeholder="Don"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* <div> */}
            <div>
            <h2 className="emails" >Email*</h2>
            <input
            id="n"
            className="mssg"
              type="text"
              placeholder="abc@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            {/* <br /> */}
            <div>
            <h2  className="phone" >Phone*</h2>
            <input

id="no"
            className="mssg"
              type="number"
              placeholder="99342-32124"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="text-area" >
          <h2  className="mssgs" >Message*</h2>
          <textarea
          id="mn"
          className="texts"
            rows={5}
            placeholder="SAY SOMETHING !!!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Send</button>
          </div>
        </form>
        {/* <img src="/Vector.png" alt="vector" /> */}
      </div>
    </>
  );
};

export default MessageForm;
