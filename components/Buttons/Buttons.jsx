import React from 'react'
import './buttons.css'
import Button from 'react-bootstrap/Button';
import { FaBitbucket } from "react-icons/fa";
const Buttons = () => {
  return (
    <div className='navBtns'>
      <Button className='loginBtn btn' active>
        Login
      </Button>{' '}
      <Button className='SignupBtn btn' active>
        Signup
      </Button>
      
     <FaBitbucket className='bucket' size={40}/>
    </div>
  )
}

export default Buttons
