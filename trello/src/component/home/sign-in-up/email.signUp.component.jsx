import React, {useState} from "react";
import FormInput from "../../../resuable/formInput/form-input.component";
import CustomButtonComponent from "../../../resuable/button/customButton.component";
import { creatUserProfileDocument } from "../../../utilis/firebase.utilis";
import "../sign-in-up/signinup.style.scss";

const EmailSignUpComponent = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async event => {
    creatUserProfileDocument(email, password);
    setemail("");
    setpassword("");
  }

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
        label="continue" 
        type="submit" 
        title="button account-button button-green signup-redirect" 
        onClick={handleSubmit}>
      </CustomButtonComponent>
    </div>
  )
};

export default EmailSignUpComponent;