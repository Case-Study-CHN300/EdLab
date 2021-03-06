import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import formaldehyde from "../images/formaldehyde.svg";
import anestheicGases from "../images/anesthetic-gases.svg";
import chemicalSafety from "../images/chemical-safety.svg";
import generalSafety from "../images/general-safety.svg";
import controlledSubstances from "../images/controlled-substances.svg";
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import WavePink from "../images/wave-pink.svg";
import WavePinkWhite from "../images/wave-pink-white.svg";
import WaveGreyBlack from "../images/wave-grey-black.svg";
import {
  CoursesContainer,
  CoursesWrapper,
  CoursesCard,
  CoursesIcon,
  CoursesH2,
  variants,
  variants2,
  Img,
  Container,
  CoursesP,
  Wrapper,
  Wrapper2,
} from "../components/CoursesSection/CourseElements";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar/index2";
import Sidebar from "../components/Sidebar/index2";

const Home = ({bgcolor}) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callHomePage = async () => {
      try {
          const res = await fetch("/api/home" , {
              method: "GET",
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/"
              },
              credentials:"include"
          }); 
          
          const data = await res.json();
          setUserData(data);
          console.log(data);
        
          if(!res.status === 200){
              const error = new Error(res.error);
              throw error;
          }
      } catch (error) {
          console.log("error" + error);
          navigate("/signin");
      }
  }
  useEffect(() => {
      callHomePage();
  }, []);

  const changeRoute1 = () => {
    navigate("/General-Safety");
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
    <Img
      src={WavePink}
    />
      <Container >
        <Wrapper>
            <Typewriter  
              onInit={(typewriter)=> {
              typewriter
              
              .typeString("EdLab")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Welcomes You")
              .start();
              }}
            />
            <motion.p
              z-index="1"
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1 }}
            >
              {userData.name}!
            </motion.p>
        </Wrapper>
      </Container>
      <Img
      src={WavePinkWhite}
    />
    <CoursesContainer>
        <Wrapper2 
        variants={variants2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
        >
              <motion.p
                z-index="1"
                variants={variants2}
                initial="initial"
                animate="animate"
                transition={{ duration: 1 }}
              >
                Modules
              </motion.p>
        </Wrapper2>
      <CoursesWrapper>
        <CoursesCard onClick={changeRoute1}
        >
          <CoursesIcon src={generalSafety} />
          <CoursesH2 >General Safety</CoursesH2>
          <CoursesP >General Safety is a multi-disciplinary approach ensuring safe working practices</CoursesP>
        </CoursesCard>
        <CoursesCard onClick={changeRoute2}
        >
          <CoursesIcon src={chemicalSafety} />
          <CoursesH2>Chemical Safety</CoursesH2>
          <CoursesP >Chemical safety includes all those practices designed to minimise the risk of exposure to potentially hazardous chemicals</CoursesP>
        </CoursesCard>
        <CoursesCard onClick={changeRoute3}
        >
          <CoursesIcon src={controlledSubstances} />
          <CoursesH2>Controlled Substances</CoursesH2>
          <CoursesP >A controlled substance is generally a chemical whose manufacture, possession and use is regulated by a government.</CoursesP>
        </CoursesCard>
        <CoursesCard onClick={changeRoute4}
        >
          <CoursesIcon src={formaldehyde} />
          <CoursesH2>Formaldehyde</CoursesH2>
          <CoursesP >Formaldehyde can act as a sensitizing agent and is a known human carcinogen i.e. linked to nasal and lung cancer</CoursesP>
        </CoursesCard>
        <CoursesCard onClick={changeRoute5}
        >
          <CoursesIcon src={anestheicGases} />
          <CoursesH2>Safe Use of Anesthetic Gases</CoursesH2>
          <CoursesP >Workplace exposures to anesthetic gases occur in hospital-based / stand-alone operating rooms, recovery rooms, dental operatories, and veterinary facilities.</CoursesP>
        </CoursesCard>
      </CoursesWrapper>
    </CoursesContainer>
    <Img
      src={WaveGreyBlack}
    />
    <Footer/>
    </>
  )
}

export default Home