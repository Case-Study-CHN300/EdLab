import React , {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import '../components/Form/Form.css';
import validate from '../components/Form/validateInfo';
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/index2";
import Sidebar from "../components/Sidebar/index2";
const Signup = () => {
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
   const navigate = useNavigate();
   const [errors, setErrors] = useState({});
   const [user , setUser] = useState({
       name:"", email: "", supervisor:"", password: "", cpassword:""
   });

   let name , value;
   const handleInputs = (e) =>{
       name = e.target.name;
       value = e.target.value;

       setUser({...user , [name]: value});
   }    

   const PostData = async (e) =>{
    e.preventDefault();
    const {name, email, supervisor, password, cpassword} = user;
    setErrors(validate(user));
    console.log("errors " + errors);
    const res = await fetch("/api/register", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name, email, supervisor, password, cpassword
        })
    })

    const data = await res.json();
    if(res.status === 400 || !data){
        window.alert("Invalid registration");
    }
    else{ 
        window.alert("Valid registration, please sign-in to proceed");
        navigate("/signin");
    }
   }
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
     setIsOpen(!isOpen);
   };
   useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <div class="background">
          <div class="shape"></div>
          <div class="shape"></div>

          <form method="POST" onSubmit={PostData} className='form' noValidate>
              <h3>Create Account</h3>

              <label for="name">Name</label>
                <input
                  className='form-input'
                  type='text'
                  name='name'
                  placeholder='Enter your full name'
                  value={user.name} onChange={handleInputs}
                />
                {errors.name && <p className='form-p'>{errors.name}</p>}
              <label for="supervisor">Safety Supervisor Name</label>
                <input
                  className='form-input'
                  type='text'
                  name='supervisor'
                  placeholder='Enter Safety supervisor full name'
                  value={user.supervisor} onChange={handleInputs}
                />
                {errors.name && <p className='form-p'>{errors.name}</p>}
              <label for="email">IITR-Email</label>
                <input
                  className='form-input'
                  type='email'
                  name='email'
                  placeholder='Enter your gsuite email'
                  value={user.email} onChange={handleInputs}
                />
                {errors.email && <p className='form-p'>{errors.email}</p>}
              <label for="name">Password</label>
                <input
                  className='form-input'
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  value={user.password} onChange={handleInputs}
                />
                {errors.password && <p className='form-p'>{errors.password}</p>}
              <label for="cpassword">Confirm Password</label>
              <input
                className='form-input'
                type='password'
                name='cpassword'
                placeholder='Confirm your password'
                value={user.cpassword} onChange={handleInputs}
              />
              {errors.cpassword && <p className='form-p'>{errors.cpassword}</p>}

              <Button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                    scale: 0.95,
                    backgroundColor: "#67F6E7",
                    border: "none",
                    color: "#000",
                    }}
                    type='submit'
                >
                    Sign Up
                </Button>
              <span className='form-input-login'>
                Already have an account? Login <a href='/signin'>here</a>
              </span>
          </form>

      </div>

    </>
  )}

export default Signup