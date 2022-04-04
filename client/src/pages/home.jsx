import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import formaldehyde from "../images/formaldehyde.svg";
import anestheicGases from "../images/anesthetic-gases.svg";
import chemicalSafety from "../images/chemical-safety.svg";
import researchSafety from "../images/research-safety.svg";
import controlledSubstances from "../images/controlled-substances.svg";
import Footer from '../components/Footer';

import {
  CoursesContainer,
  CoursesWrapper,
  CoursesCard,
  CoursesIcon,
  CoursesH2,
} from "../components/CoursesSection/CourseElements";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callHomePage = async () => {
      try {
          const res = await fetch("/home" , {
              method: "GET",
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
              },
              credentials:"include"
          }); 
          
          const data = await res.json();
      
          setUserData(data);
       
        
          if(!res.status === 200){
              const error = new Error(res.error);
              throw error;
          }
      } catch (error) {
          console.log(error);
          navigate("/signin");
      }
  }
  useEffect(() => {
      callHomePage();
  }, []);

  const changeRoute1 = () => {
    navigate("/Introduction-to-Research-Safety");
  }
  const changeRoute2 = () => {
    navigate("/Chemical-Safety");
  }  
  const changeRoute3 = () => {
    navigate("/Controlled-Substances");
  }  
  const changeRoute4 = () => {
    navigate("/Formaldehyde");
  }
  const changeRoute5 = () => {
    navigate("/Safe-Use-Of-Anesthetic-Gases");
  }
  return (
    <>
    <CoursesContainer id="courses">
      {/* {userData.name} */}
      <CoursesWrapper>
        <CoursesCard onClick={changeRoute1}>
          <CoursesIcon src={researchSafety} />
          <CoursesH2 >Introduction to Research Safety</CoursesH2>
        </CoursesCard>
        <CoursesCard onClick={changeRoute2}>
          <CoursesIcon src={chemicalSafety} />
          <CoursesH2>Chemical Safety</CoursesH2>
        </CoursesCard>
        <CoursesCard onClick={changeRoute3}>
          <CoursesIcon src={controlledSubstances} />
          <CoursesH2>Controlled Substances</CoursesH2>
        </CoursesCard>
        <CoursesCard onClick={changeRoute4}>
          <CoursesIcon src={formaldehyde} />
          <CoursesH2>Formaldehyde</CoursesH2>
        </CoursesCard>
        <CoursesCard onClick={changeRoute5}>
          <CoursesIcon src={anestheicGases} />
          <CoursesH2>Safe Use of Anesthetic Gases</CoursesH2>
        </CoursesCard>
      </CoursesWrapper>
    </CoursesContainer>
    <Footer/>
    </>
  )
}

export default Home