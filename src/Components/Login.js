import React from "react";
import "./index.css";

import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";



function LoginForm() {
 

  return (
    <>
      <Navbar bg="#1977cc" expand="lg">
        <Navbar.Brand href="#home" id="nav-title">Navatar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
         <Link to="LearnerRegisteration"> <Button style={{border:"1px solid #fff", background:"#2c4964", padding: "5px", fontSize: "14px"}}>Student Login</Button></Link>
         <Link to="TeacherRegisteration"> <Button style={{border:"1px solid #fff", background:"#2c4964", padding: "5px", fontSize: "14px", marginLeft:"1rem"}}>Teacher Login</Button></Link>
        </Navbar.Collapse>
      </Navbar>
      
  
 


  <section id="about" class="about">
      <div class="container-fluid">
      <h3>About Navatar</h3>
        <div class="row">
         

          <div class="col icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
          
            
            <div class="icon-box">
              <div class="icon"><i class="bx bx-fingerprint"></i></div>
              <h4 class="title"><h5>About Navatar</h5></h4>
              <h6 class="description">Navatar is a unique service that brings healthcare professionals closer to their patients, even when they are working from home. Our service offers doctors the opportunity to connect with their patients through our robotic podbot machine, which is equipped with a video monitor for seamless video conferencing.</h6>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-gift"></i></div>
              <h4 class="title"><h5>How Navatar Works</h5></h4>
              <h6 class="description">To use our service, doctors simply select their desired city, hospital, Navatar name, date, and time and book the Navatar for a fee of 500.Rs per hour. Once the Navatar is booked, the doctor can control the robot and navigate it to the patient's location. This allows for face-to-face communication, despite the doctor not being physically present.</h6>
            </div>

        

          </div>
        </div>

      </div>
    </section>
    <section id="departments" class="departments">
      <div class="container">

        <div class="section-title">
          <h2>Benefits of Navatar</h2>
          <h6>Navatar offers several benefits, including</h6>
        
        </div>

        <div class="row benefits">
   
         <h4>&#x2713; Increased access to quality healthcare services, especially for patients in remote or underserved areas</h4>
         <h4>&#x2713; Improved work-life balance for doctors, as they can work from home and still connect with their patients</h4>
         <h4>&#x2713; Reduced risk of exposure to contagious diseases, as doctors can communicate with patients remotely</h4>
         <h4>&#x2713; Enhanced patient experience and satisfaction, as they can receive care from their trusted doctor even when they are not physically present.</h4>
                
                    </div>
                    </div>
             
    </section>
      
    <section id="conclusion" class="conclusion">
      <div class="container">

        <div class="section-title">
          <h2>Conclusion</h2>
          
        
        </div>

        <div class="row conclusion">
   
         <h4>At Navatar, we believe that our service will revolutionize the way doctors work and improve patient outcomes. By leveraging the latest technology, we are committed to providing innovative solutions that enhance the delivery of medical services and increase access to quality healthcare for all.</h4>
                    </div>
                    </div>
             
    </section>

    <footer id="footer">


<div class="container d-md-flex py-4">

  <div class="me-md-auto text-center text-md-start">
    <div class="copyright">
      &copy; Copyright <strong><span>Sangam One</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      
      Designed by <a href="/Privacypolicy">Privacy and policy</a><br></br><a href="/TandC">Terms and Conditions</a><br></br>
      <a href="CancellationRefund">Cancellation/Refund</a>
    </div>
  </div>
  
</div>
</footer> 

    </>
  );
}

export default LoginForm;