import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Start from '../components/Quiz/Start';
import Question from '../components/Quiz/Question';
import End from '../components/Quiz/Quiz3/End';
import ScoreCard from '../components/Quiz/ScoreCard';
import Modal from '../components/Quiz/Modal';
import quizData from '../components/Quiz/data/quiz3.json';
import Download from '../components/DownloadSection/download3';
import "../components/Quiz/quiz.css";
import 'bulma/css/bulma.min.css';
import Footer from '../components/Footer';

let interval;
const ControlledSubstances = () => {
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
      setStep(1);
      setTime(0);
      navigate("/home")
    }
    const marks = userData.course3Marks;

    const RenderQuiz = () => {
      if (marks >= 0) {
        return (
          <ScoreCard       
          correctAnswers={marks}
          data={quizData.data}
          />
        )
      } else {
        return (
          <>
          {step === 1 && <Start onQuizStart={quizStartHandler}/>}
          </>
        )
      }
    };
  return (
    <>
    <div className="Quiz_App">
      <div>
        <Download/>
      </div>
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
    
          {showModal && <Modal 
            onClose={() => setShowModal(false)}
            results={answers}
            data={quizData.data}
          />}
    </div>   
    <Footer/>
    </>
  )
}

export default ControlledSubstances;