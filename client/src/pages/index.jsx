import React from 'react'
import HeroSection from "../components/Main/HeroSection";
import InfoSection from "../components/Main/InfoSection";
import CoursesSection from "../components/Main/CoursesSection";
import { homeObjOne, homeObjTwo } from "../components/Main/InfoSection/Data";
import Footer from '../components/Footer';
const Main = () => {
	return (
		<>
		  <HeroSection />
		  <InfoSection {...homeObjOne} />
		  <InfoSection {...homeObjTwo} />
		  <Footer/>
		</>
	);
};

export default Main;