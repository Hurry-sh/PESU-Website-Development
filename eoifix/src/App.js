import React, { Component } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faTwitter , faLinkedin , faFacebook , faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FaInstagram , FaFacebook , FaLinkedin , FaTwitter , FaHeart } from 'react-icons/fa';
import './App.css'
//import "C:/Users/haris/Desktop/3rd Semester/eoifix/authInMern/client/src/App"
//import Map from '@googlemaps/react-wrapper';
//import DarkMode from "./components/DarkMode/DarkMode"


// Note : Always start this react app and then start the login page app.


class MyClass extends React.Component {
   render() 
   {
    return(
    <div>
    <meta name="viewport"/>
    <title>PES University</title>
    <link rel="stylesheet" href="App.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap" rel="stylesheet" />
    {/* <link rel="stylesheet" href="C:\Users\haris\Desktop\3rd Semester\eoifix\public\miniproject\font-awesome-4.7.0\cssfont-awesome.min.css" /> */}
    <section className="header">
      <nav>
        <a href="index.html" className="Logo"><img src="miniproject/logo.png.png" width="100px" /></a>
        <div className="nav-links" id="navLinks">
        {/* <FaBars size="1em" color='#ff7300' onclick="hideMenu()" /> */}
          <ul>
            {/* <li><a href>HOME</a></li> */}
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#course">COURSES</a></li>
            <li><a href="https://twitter.com/PESUniversity">BLOG</a></li>
            <li><a href="#about">CONTACT</a></li>
            <li><a href="#location">LOCATION</a></li>
          </ul>
        </div>
        <i className="fa fa-bars" onclick="showMenu()" />
      </nav>
      <div className="text-box">
        <h1>Welcome to PESU!</h1>
        <p>50+ years of empowering students to navigate the real world.<br /></p>
        <a href="#admissions" className="hero-btn">Admissions</a>
      </div>
    </section>

    {/*course*/}
    
    <section className="course" id="course">
      <h1>Courses offered</h1>
      <p>Discover our programs and your campus choice.</p>
      <div className="row">
        <div className="course-col">
          <h3>Engineering</h3>
          <p>Engineering is the practice of using natural science, mathematics, and the engineering design process to solve technical problems, increase efficiency and productivity, and improve systems.</p>
        </div>
        <div className="course-col">
          <h3>Law</h3>
          <p>The system of rules which a particular country or community recognizes as regulating the actions of its members and which it may enforce by the imposition of penalties.</p>
        </div>
        <div className="course-col">
          <h3>Business</h3>
          <p>Organization or enterprising entity engaged in commercial, industrial, or professional activities.</p>
        </div>
      </div>
    </section>
    <section className="course">
      <div className="row1">
        <div className="course-col1">
          <h3>Medical</h3>
          <p>The field of health and healing. It includes nurses, doctors, and various specialists. It covers diagnosis, treatment, and prevention of disease, medical research, and many other aspects of health.</p>
        </div>
        <div className="course-col1">
          <h3>Architecture</h3>
          <p>The art and technique of designing and building, as distinguished from the skills associated with construction.</p>
        </div>
        <div className="course-col1">
          <h3>Arts</h3>
          <p>Arts degree courses have a focus in both design and aesthetics related aspects, and humanities, social sciences and Liberal arts related courses.</p>
        </div>
      </div>
    </section>
    {/*campus*/}
    <section className="campus">
      <h1>Our campuses</h1>
      <p>The leafy PES campus offers delightful spaces for studying, living & interaction. The residential facilities have been carefully planned according to international standards. The classrooms offer well-ventilated &amp; comfortable ambience. The modern cafe, with it's open kitchen and airy patio is equipped to serve hundreds of students.</p>
    </section>
    <div className="row">
      <div className="campus-col">
        <img src="/miniproject/img17.jpg" />
        <div className="layer">
          <h3>Electronic City Campus</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="miniproject/img69.jpg" />
        <div className="layer">
          <h3>Ring Road Campus</h3>
        </div>
      </div>
    </div>

    {/* {Location} */}

    <section className='ContactUs' id='location'>
      <h1>Location</h1>
      <p>With our glorious campuses situated in the heart of the IT hub of India, Bangalore, we strive <br></br>to provide the best location to all students of PESU.</p>
      <br></br>
      <section className='gmap-frame'>
        <h2>Ring Road Campus</h2>
        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=PES%20University,100%20Feet%20Ring%20Road,%20Banashankari%20Stage%20III,%20Dwaraka%20Nagar,%20Banashankari,%20Bengaluru,%20Karnataka%20560085+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
      </section>
      <section className='gmap-frame'>
        <h2>Electronic City Campus</h2>
        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=PES%20University%20Electronic%20City%20Campus,%20VM67+HVP,%20Hosur%20Rd,%20Konappana%20Agrahara,%20Electronic%20City,%20Bengaluru,%20Karnataka%20560100+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
      </section>
    </section>

    {/*Facilities*/}

    <section className="facilities">
      <h1>Our facilities</h1>
      <p>PESU offers a wide range of facilities to create an environment conducive to learning, <br />personal growth, research, and community engagement.</p>
      <div className="row">
        <div className="facilities-col">
          <img src="miniproject/img3.png" />
          <h3>MRD Student Center</h3>
        </div>
        <div className="facilities-col">
          <img src="miniproject/img4.png" />
          <h3>PESU Gym</h3>
        </div>
        <div className="facilities-col">
          <img src="miniproject/img10.png.jpg" />
          <h3>Cricket Ground</h3>
        </div>
        <div className="facilities-col">
          <img src="miniproject/img11.jpg" />
          <h3>PESU Library</h3>
        </div>
      </div>
    </section>
    <section className="facilities1">
      <div className="row">
        <div className="facilities1-col">
          <img src="miniproject/img12.jpg" />
          <h3>Basketball Court</h3>
        </div>
        <div className="facilities1-col">
          <img src="miniproject/img13.jpg" />
          <h3>Cafeteria</h3>
        </div>
        <div className="facilities1-col">
          <img src="miniproject/img14.jpg" />
          <h3>Badminton Court</h3>
        </div>
        <div className="facilities1-col">
          <img src="miniproject/img15.jpg" />
          <h3>Auditorium</h3>
        </div>
      </div>
    </section>

    {/*contact page*/}
    
    <section className="contact page" id="admissions">
      <div className="cta">
        <h1>Join PES University through our own exam <br />PESSAT!</h1>
        <br />
        <a href="http://localhost:3000/signup" className="hero-btn">Enroll now</a>
      </div>
    </section>

    <section className="footer" id="about">
      <h1>About us</h1>
      <p>Click the following links to know more about us!</p>
      <div className="icons">
        <a href="https://www.facebook.com/pesuniversity/" className='icons'><FaFacebook size="1.25em" color='#ff7300'/></a>
        <a href="https://www.instagram.com/pesuniversity/" className='icons'><FaInstagram size = "1.25em" color='#ff7300'/></a>
        <a href="https://in.linkedin.com/school/pesuniversity/" className='icons'><FaLinkedin size = "1.25em" color='#ff7300'/></a>
        <a href="https://twitter.com/PESUniversity" className='icons'><FaTwitter size = "1.25em" color='#ff7300'/></a>
      </div>
      <p>Made with <FaHeart size = "1em" color='red'/> by Harish K.</p>
    </section>
    {/*Javascript for toggle menu*/}
  </div>
    )
  }
}

export default MyClass;
