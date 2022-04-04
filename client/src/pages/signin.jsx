import React, {useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import { motion } from "framer-motion";
import { UserContext } from '../App';

const Signin = () => {

  const Button = styled(motion.button)`
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    background: #4169e1;
    color: white;
    margin-top: 30px;
    margin-bottom: 10px;
    width: 100%;
  `;
  const {state , dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();

    const res = await fetch("/signin", {
        

        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email, password
        })
      })
    
      const data = res.json();
      if(res.status === 400 || !data){
          window.alert("Invalid credentials");
      }
      else{
        dispatch({type: "USER", payload: true});
        window.alert("Login successful");
        navigate("/home");
      }
  }
  return (
      <>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>

            <form method="POST">
                <h3>Welcome Back!</h3>

                <label for="username">Email</label>
                    <input
                    className='form-input'
                    type='email'
                    name='email'
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    />
                <label for="password">Password</label>
                    <input
                    className='form-input'
                    type='password'
                    name='password'
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                    />
                <Button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                    scale: 0.95,
                    backgroundColor: "#67F6E7",
                    border: "none",
                    color: "#000",
                    }}
                    onClick={loginUser}  type='submit'
                >
                    Sign in
                </Button>
                <br />
                <span className='form-input-login'>
                    New here? Register <a href='/signup'>here</a>
                </span>
            </form>

        </div>
      </>
    

  )
}

export default Signin