import React, { useState } from 'react';
import Signup from '../components/Signup';
import Comingsonpage from './comingson';

const SignupPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm(){
    setIsSubmitted(true)
  }

  return(
    <>
     {!isSubmitted ? (<Signup submitForm={submitForm}/>) : (<Comingsonpage/>)}
    </>

  )
}

export default SignupPage;