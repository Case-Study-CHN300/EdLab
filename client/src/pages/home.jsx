import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Icon1 from "../images/planet-3.svg";
import Icon2 from "../images/planet-4.svg";
import Icon3 from "../images/planet-1.svg";

import {
  CoursesContainer,
  CoursesH1,
  CoursesWrapper,
  CoursesCard,
  CoursesIcon,
  CoursesH2,
  CoursesP,
} from "../components/Main/CoursesSection/CourseElements";

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
    navigate("/");
  }  
  const changeRoute3 = () => {
    navigate("/");
  }  
  const changeRoute4 = () => {
    navigate("/");
  }
  const changeRoute5 = () => {
    navigate("/");
  }
  return (
    <>
    <CoursesContainer id="courses">
      {/* {userData.name} */}
      <CoursesWrapper>
        <CoursesCard onClick={changeRoute1}>
          <CoursesIcon src={Icon1} />
          <CoursesH2 >Introduction to Research Safety</CoursesH2>
          <CoursesP>
           	Anyone performing research in a U of M laboratory
          </CoursesP>
        </CoursesCard>
        <CoursesCard onClick={changeRoute2}>
          <CoursesIcon src={Icon2} />
          <CoursesH2>Chemical Safety</CoursesH2>
          <CoursesP>
            Anyone performing research in a U of M laboratory
          </CoursesP>
        </CoursesCard>
        <CoursesCard onClick={changeRoute3}>
          <CoursesIcon src={Icon1} />
          <CoursesH2>Controlled Substances</CoursesH2>
          <CoursesP>
          Anyone performing research in a U of M laboratory          </CoursesP>
        </CoursesCard>
        <CoursesCard onClick={changeRoute4}>
          <CoursesIcon src={Icon2} />
          <CoursesH2>Formaldehyde</CoursesH2>
          <CoursesP>
          Anyone performing research in a U of M laboratory          </CoursesP>
        </CoursesCard>
        <CoursesCard onClick={changeRoute5}>
          <CoursesIcon src={Icon3} />
          <CoursesH2>Safe Use of Anesthetic Gases</CoursesH2>
          <CoursesP>
          Anyone performing research in a U of M laboratory
          </CoursesP>
        </CoursesCard>
      </CoursesWrapper>
    </CoursesContainer>
    </>
  )
}

export default Home