import React, { useState, useEffect } from "react";
import Message from "./Message";

const Booking = () => {
  // create state variables for each form element
  const [destination, setDestination] = useState("Mount Lavinia");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [displayMsg, setDisplayMsg] = useState(null);
  const [msg, setMsg] = useState(null);
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setVisible(true);
    setDisplayMsg("success");
    setMsg(`You booked ${destination} on ${checkIn} till ${checkOut}`);
  };

  return (
    <>
      {displayMsg && visible && <Message displayMsg={displayMsg} msg={msg} />}
      <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
        <form
          className="lg:flex lg:justify-between w-full items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col my-2 py-2">
            <label>Destination</label>
            <select
              className="lg:w-[300px] md:w-full border rounded-md p-2"
              value={destination} // set the value from the state
              onChange={(e) => setDestination(e.target.value)} // update the state when the value changes
            >
              <option>Mount Lavinia</option>
              <option>Nine Arch Bridge</option>
              <option>Temple Of Tooth At Kandy</option>
              <option>Sigiriya</option>
            </select>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
              <label>Check-In</label>
              <input
                className="border rounded-md p-2"
                type="date"
                value={checkIn} // set the value from the state
                onChange={(e) => setCheckIn(e.target.value)} // update the state when the value changes
              />
            </div>
            <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
              <label>Check-Out</label>
              <input
                className="border rounded-md p-2"
                type="date"
                value={checkOut} // set the value from the state
                onChange={(e) => setCheckOut(e.target.value)} // update the state when the value changes
              />
            </div>
          </div>
          <div className="flex flex-col my-2 p-2 w-full">
            <label>Search</label>
            <button className="w-full">Rates & Availability</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Booking;
