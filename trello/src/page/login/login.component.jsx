import React from 'react';
import EmailSignInComponent from '../../component/home/sign-in-up/email.signIn.component';
import GoogleSignInComponent from '../../component/home/sign-in-up/google.signin.component';
import { Container } from 'react-bootstrap';
import './login.style.scss';

const SignInComponent = () => {
  return(
    <div className='signin-side'>
      <Container>
        <div className='email-signup-side'>
          <EmailSignInComponent></EmailSignInComponent>
        </div>

        <div className='google-login-side'>
          <GoogleSignInComponent></GoogleSignInComponent>
        </div>
      </Container>
    </div>
  )
};

export default SignInComponent;