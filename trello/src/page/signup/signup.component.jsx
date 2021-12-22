import React from 'react';
import EmailSignUpComponent from '../../component/home/sign-in-up/email.signUp.component';
import { Container } from 'react-bootstrap';
import './signup.style.scss';

const SignUpComponent = () => {
  return(
    <div className='signup-side'>
      <Container>
        <div className='email-signup-side'>
          <EmailSignUpComponent></EmailSignUpComponent>
        </div>

        <div className='google-login-side'></div>
      </Container>
    </div>
  )
};

export default SignUpComponent;