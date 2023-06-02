import React, { useState } from 'react';
import axios from 'axios';

const RegisterTeacherForm = () => {
  const [addressline1, setAddressLine1] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [pincode, setPincode] = useState('');
  const [teacher_name, setTeacherName] = useState('');
  const [teacher_email, setTeacherEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `https://navatar.sangamone.com/registerTeacher?addressline1=${encodeURIComponent(addressline1)}&mobileno=${encodeURIComponent(mobileno)}&pincode=${encodeURIComponent(pincode)}&teacher_name=${encodeURIComponent(teacher_name)}&teacher_email=${encodeURIComponent(teacher_email)}`;

      const response = await axios.post(url);

      console.log(response.data);
      setMessage(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Error occurred while registering teacher. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <h2>Teacher Registration</h2>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Address Line 1" value={addressline1} onChange={(e) => setAddressLine1(e.target.value)} required /><br /><br />
        <input type="text" placeholder="Mobile No" value={mobileno} onChange={(e) => setMobileNo(e.target.value)} required /><br /><br />
        <input type="text" placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required /><br /><br />
        <input type="text" placeholder="Teacher Name" value={teacher_name} onChange={(e) => setTeacherName(e.target.value)} required /><br /><br />
        <input type="email" placeholder="Teacher Email" value={teacher_email} onChange={(e) => setTeacherEmail(e.target.value)} required /><br /><br /><br />
        <button type="submit">Submit</button>
      </form>
      <h3>{message}</h3>
    </div>
  );
};

export default RegisterTeacherForm;
