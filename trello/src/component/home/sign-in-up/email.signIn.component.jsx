import React, {useState, useEffect} from "react";
import FormInput from "../../../resuable/formInput/form-input.component";
import CustomButtonComponent from "../../../resuable/button/customButton.component";
import { signInWithEmailAndPassword, auth } from "../../../utilis/firebase.utilis";
import { useNavigate } from "react-router-dom";
import "../sign-in-up/signinup.style.scss";

const EmailSignInComponent = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [currentUser, setcurrentUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setcurrentUser(user);
      if(user) {
        navigate("/");
      }
    });
  }, []);

  return(
    <div>
      <FormInput 
        title="form-field" 
        name="email" 
        type="email" 
        value={email} 
        placeholder="email" 
        onChange={(e) => setemail(e.target.value)} 
        require>
      </FormInput>

      <FormInput 
        title="form-field" 
        name="password" 
        type="text" 
        value={password} 
        placeholder="password" 
        onChange={(e) => setpassword(e.target.value)} 
        require>
      </FormInput>

      <CustomButtonComponent 
        label="login" 
        type="submit" 
        title="button account-button button-green signup-redirect" 
        onClick={() => signInWithEmailAndPassword(email, password)}>
      </CustomButtonComponent>
    </div>
  )
};

export default EmailSignInComponent;