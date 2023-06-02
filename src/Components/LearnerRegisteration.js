import React, { useState } from 'react';
import axios from 'axios';
import "./index.css";

const RegisterForm = () => {
  const [addressline1, setAddressLine1] = useState('');
  const [learner_email, setLearnerEmail] = useState('');
  const [learner_name, setLearnerName] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [pincode, setPincode] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `https://navatar.sangamone.com/register?addressline1=${encodeURIComponent(addressline1)}&learner_email=${encodeURIComponent(learner_email)}&learner_name=${encodeURIComponent(learner_name)}&mobileno=${encodeURIComponent(mobileno)}&pincode=${encodeURIComponent(pincode)}`;

      const response = await axios.post(url);

      console.log(response.data);
      setMessage(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Error occurred while registering. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <h2>Student Registration</h2>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Address Line 1" value={addressline1} onChange={(e) => setAddressLine1(e.target.value)} required /><br /><br />
        <input type="email" placeholder="Email" value={learner_email} onChange={(e) => setLearnerEmail(e.target.value)} required /><br /><br />
        <input type="text" placeholder="Name" value={learner_name} onChange={(e) => setLearnerName(e.target.value)} required /><br /><br />
        <input type="tel" placeholder="Mobile No" value={mobileno} onChange={(e) => setMobileNo(e.target.value)} required /><br /><br />
        <input type="text" placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required /><br /><br /><br />
        <button type="submit">Submit</button>
      </form>
      <h3>{message}</h3>
    </div>
  );
};

export default RegisterForm;
