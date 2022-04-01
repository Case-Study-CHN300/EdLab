import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import AwesomeSlider from "react-awesome-slider";
import Start from '../components/Quiz/Start';
import Question from '../components/Quiz/Question';
import End from '../components/Quiz/End';
import Modal from '../components/Quiz/Modal';
import quizData from '../data/quiz.json';
import "react-awesome-slider/dist/styles.css";
import "../components/Slider/slider.css";
import "../components/Quiz/quiz.css";
import 'bulma/css/bulma.min.css';

let interval;
const ResearchSafety = () => {
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

    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      if(step === 3) {
        clearInterval(interval);
      }
    }, [step]);
  
    const quizStartHandler = () => {
      setStep(2);
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  
    const resetClickHandler = () => {
      setActiveQuestion(0);
      setAnswers([]);
      setStep(2);
      setTime(0);
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  return (
    <>
    <div className="App">
      {/* <h1>{userData.course1Marks}</h1> */}
      {step === 1 && <Start onQuizStart={quizStartHandler}/>}
      {step === 2 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End 
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}

      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
    </div>
    </>
  )
}

export default ResearchSafety