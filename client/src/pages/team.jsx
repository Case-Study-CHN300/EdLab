import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar/index2";
import Sidebar from "../components/Sidebar/index2";
import "../components/TeamSection/team.css"
import karan from "../images/karan.jpeg"
const OurTeam = () => {
  const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

	return (
		<>
		  <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div class="main">
        <div class="profile-card">
            <div class="img">
                <img src={karan}/>
            </div>
            <div class="caption">
                <h3>Vin Diesel</h3>
                <p>Senior App Developer</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
            <img src={karan}/>
            </div>
            <div class="caption">
                <h3>David Corner</h3>
                <p>Front End Developer</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
            <img src={karan}/>
            </div>
            <div class="caption">
                <h3>Tom Cruise</h3>
                <p>Full Stact Developer</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </div>

    <script src="./Font-Awesome/all.min.js"></script>
    <Footer/>
		</>
	);
};

export default OurTeam;