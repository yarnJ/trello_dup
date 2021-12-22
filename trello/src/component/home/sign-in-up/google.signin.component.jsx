import React from "react";
import { signinWithGoogle } from "../../../utilis/firebase.utilis";
import CustomButtonComponent from "../../../resuable/button/customButton.component";
import "./signinup.style.scss";

const GoogleSignInComponent = () => {
  return(
    <div className="google-signin-area">
      <CustomButtonComponent 
        label="Sign In With Google" 
        type="submit" 
        title="button account-button button-green signup-redirect" 
        onClick={() => signinWithGoogle()}>
      </CustomButtonComponent>
    </div>
  )
};

export default GoogleSignInComponent;