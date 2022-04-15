import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Start from '../components/Quiz/Start';
import Question from '../components/Quiz/Question';
import End from '../components/Quiz/Quiz5/End';
import ScoreCard from '../components/Quiz/ScoreCard';
import Modal from '../components/Quiz/Modal';
import quizData from '../components/Quiz/data/quiz1.json';
import Download from '../components/DownloadSection/download5';
import "../components/Quiz/quiz.css";
import 'bulma/css/bulma.min.css';
import Footer from '../components/Footer';
import Instructions from '../components/Quiz/Instructions';
import Navbar from "../components/Navbar/index2";
import Sidebar from "../components/Sidebar/index2";

let interval;
const AnestheticGases = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const callHomePage = async () => {
        try {
            const res = await fetch("/api/home" , {
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
    const [showInstructions, setShowInstructions] = useState(false);
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      if(step === 3) {
        clearInterval(interval);
      }
    }, [step]);
  
    const quizStartHandler = () => {
      setShowInstructions(true);
      setStep(2);
    }
  
    const resetClickHandler = () => {
      setActiveQuestion(0);
      setAnswers([]);
      setStep(1);
      setTime(0);
      navigate("/home")
    }
    const marks = userData.course5Marks;
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    const RenderQuiz = () => {
      if (marks >= 0) {
        return (
          <>
          <Download/>
          <ScoreCard       
          correctAnswers={marks}
          data={quizData.data}
          />
          </>
        )
      } else {
        return (
          <>
          {step === 1 && <Download/>}
          {step === 1 && <Start onQuizStart={quizStartHandler}/>}
          </>
        )
      }
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <> 
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
    <RenderQuiz/>
    {step === 2 && <Question
            questionNumber={activeQuestion+1} 
            questionsLength={quizData.data.length} 
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
    <div className="Quiz_App">
          {showModal && <Modal 
            onClose={() => setShowModal(false)}
            results={answers}
            data={quizData.data}
          />}
          {showInstructions && <Instructions 
            onClose={() => {
              setShowInstructions(false)
              interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
              }, 1000);
            }}
          />}
    </div> 
    
    <Footer/>  
    </>
  )
}

export default AnestheticGases