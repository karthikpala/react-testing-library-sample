import React, { useState } from "react";

const CheckBox = () => {
  const [isChecked, setChecked] = useState(false);
  const [name, setName] = useState("john");

  const sleep = (time) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, time);
    });

  const handleCheck = async () => {
    // simulate a delay in state change
    await sleep(500);
    setChecked((prevChecked) => !prevChecked);
  };

  const handleChange = async (e) => {
    // simulate a delay in state change
    let value = e.target.value;
    await sleep(500);
    setName(value);
  };

  return (
    <div>
      <h2>Name</h2>
      <input onChange={handleChange} id="Name2" />
      <label htmlFor="Name2">{name}</label>

      <h2>CheckBox</h2>
      <input type="checkbox" onChange={handleCheck} id="CheckBox2" />
      <label htmlFor="CheckBox2">{isChecked.toString()}</label>
    </div>
  );
};

export default CheckBox;
