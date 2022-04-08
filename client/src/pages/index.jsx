import React, {useState} from 'react'
import HeroSection from "../components/Main/HeroSection";
import InfoSection from "../components/Main/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/Main/InfoSection/Data";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "react-scroll-to-top";

const Main = () => {
	const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
	return (
		<>
		<ScrollToTop smooth viewBox="0 0 24 24" svgPath="M18 15l-6-6-6 6" />
		    <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
		  <HeroSection />
		  <InfoSection {...homeObjOne} />
		  <InfoSection {...homeObjTwo} />
			<Footer/>
		</>
	);
};

export default Main;