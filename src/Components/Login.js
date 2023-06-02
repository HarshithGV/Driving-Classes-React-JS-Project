import React from "react";
import "./index.css";

import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";



function LoginForm() {
 

  return (
    <>
      <Navbar bg="#1977cc" expand="lg">
        <Navbar.Brand href="#home" id="nav-title">Driving School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
         <Link to="LearnerRegisteration"> <Button style={{border:"1px solid #fff", background:"#2c4964", padding: "5px", fontSize: "14px"}}>Student Login</Button></Link>
         <Link to="TeacherRegisteration"> <Button style={{border:"1px solid #fff", background:"#2c4964", padding: "5px", fontSize: "14px", marginLeft:"1rem"}}>Teacher Login</Button></Link>
        </Navbar.Collapse>
      </Navbar>
      
  
 


  <section id="about" class="about">
      <div class="container-fluid">
      <h3>About Driving School</h3>
        <div class="row">
         

          <div class="col icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
          
            
            <div class="icon-box">
              <div class="icon"><i class="bx bx-fingerprint"></i></div>
              <h4 class="title"><h5>About Driving School</h5></h4>
              <h6 class="description">Maruti Car Driving App is a revolutionary platform that brings together skilled car driving teachers and eager learners. Whether you're a beginner or looking to enhance your driving skills, our app provides a seamless experience for finding the right teacher within a 5 km radius.</h6>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-gift"></i></div>
              <h4 class="title"><h5>How Driving School</h5></h4>
              <h6 class="description">Teacher Registration: Any qualified car driving teacher can easily register on our app. Simply create your profile, showcase your expertise, and set your availability.</h6>
              <h6 class="description">Find Available Slots: Learners can browse through a list of available driving class slots displayed on the app. Each slot is marked with a color indicating its availability status. Green slots are free and ready to be booked.</h6>
              <h6 class="description">Book a Slot: Learners can select their preferred time slot and book it instantly. The booking process is simple, quick, and convenient.</h6>
              <h6 class="description">Confirmation Email: Once a learner successfully books a slot, an email notification is sent to the respective teacher with the learner's details. This ensures seamless communication and coordination between teachers and learners.</h6>
              <h6 class="description">Payment: The payment process is handled directly between the teacher and the learner. Teachers can discuss their preferred payment method and details with the learners during the confirmation process.</h6>

            
            </div>

        

          </div>
        </div>

      </div>
    </section>
    <section id="departments" class="departments">
      <div class="container">

        <div class="section-title">
          <h2>Benefits of Driving School</h2>
          <h6>Navatar offers several benefits, including</h6>
        
        </div>

        <div class="row benefits">
   
         <h4>&#x2713; Easy and Convenient: Find a driving teacher and book a slot in just a few taps.</h4>
         <h4>&#x2713; Wide Range of Teachers: Choose from a diverse pool of skilled and experienced car driving teachers.</h4>
         <h4>&#x2713; Location-Based: Find teachers within a 5 km radius of your location, ensuring convenience and minimizing travel time.</h4>
         <h4>&#x2713; Seamless Communication: Teachers receive email notifications with learner details, enabling effective coordination.</h4>
         <h4>&#x2713; Direct Payment: Payment arrangements are made directly between the teacher and the learner, providing flexibility and transparency.</h4>

                    </div>
                    </div>
             
    </section>
      
    <section id="conclusion" class="conclusion">
      <div class="container">

        <div class="section-title">
          <h2>Conclusion</h2>
          
        
        </div>

        <div class="row conclusion">
   
         <h4>Start your car driving journey today with Maruti Car Driving App! Download now and get ready to hit the road with confidence.</h4>
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