import React, { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";

const Contact = () => {
  const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [displayMsg, setDisplayMessage] = useState(null);
  const [msg, setMsg] = useState(null);
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${DATABASE_URL}/contacts.json`, {
        firstName,
        lastName,
        email,
        phone,
        address,
        message,
      })
      .then((response) => {
        // Handle the response
        setDisplayMessage("success");
        setMsg("Message Sent");
        setVisible(true);
      })
      .catch((error) => {
        // Handle the error
        setDisplayMessage("fail");
        setMsg("Oops! Something went Wrong");
        setVisible(true);
      });
  };

  const isFormValid = () => {
    return firstName && lastName && email && message;
  };

  return (
    <>
      {displayMsg && visible && <Message displayMsg={displayMsg} msg={msg} />}
      <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
        <h2 className="text-center text-gray-700 ">Send us a message</h2>
        <p className="text-center text-gray-700 py-2">We're standing by:</p>
        <div className="grid md:grid-cols-2">
          <img
            className="w-full md:h-full object-cover max-h-[500px] h-[400px]"
            src="https://images.unsplash.com/flagged/photo-1567498975675-a3adf1574cb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
            alt=""
          />
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2">
              <input
                id="firstName"
                className="border m-2 p-2"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                id="lastName"
                className="border m-2 p-2"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                id="email"
                className="border m-2 p-2"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="border m-2 p-2"
                type="tel"
                placeholder="Phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                id="address"
                className="border col-span-2 p-2 m-2"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <textarea
                className="border col-span-2 p-2 m-2"
                cols="30"
                rows="10"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button
                className="col-span-2 m-2 disabled:cursor-not-allowed"
                disabled={!isFormValid()}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
