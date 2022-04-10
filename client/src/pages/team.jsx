import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar/index2";
import Sidebar from "../components/Sidebar/index2";
import "../components/TeamSection/team.css"
import karan from "../images/karan.jpeg"
import WavePink from "../images/wave-pink.svg";
import WaveGreyBlack from "../images/wave-grey-black.svg";
import {
  TeamContainer,
  TeamWrapper,
  TeamCard,
  TeamIcon,
  TeamH2,
  variants,
  TeamImg,
  TeamP,
  Wrapper,
} from "../components/TeamSection/TeamElements";
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
    <TeamImg
      src={WavePink}
    />
    <TeamContainer>
       
    </TeamContainer>
    <TeamImg
      src={WaveGreyBlack}
    />  
    <Footer/>
    </>
	);
};

export default OurTeam;