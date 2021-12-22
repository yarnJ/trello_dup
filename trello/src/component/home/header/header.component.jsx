import React, {useEffect, useState} from "react";
import ButtonComponent from "../../../../src/resuable/button/button.component";
import CustomButtonComponent from "../../../resuable/button/customButton.component";
import { auth, logOut } from "../../../utilis/firebase.utilis";
import { useLocation } from "react-router-dom";
import '../header/header.style.scss';

const Header = () => {

  const [currentUser, setcurrentUser] = useState("");
  const [headerStyle, setheaderStyle] = useState([]);
  const trelloLocation = useLocation();

  const logout = () => {
    logOut();
    window.location.reload();
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        setcurrentUser(user.email);
        console.log(currentUser);
      }
    });
    window.addEventListener('wheel', handleScroll, true);
    console.log(trelloLocation.pathname.slice(1));

    
  }, [])

  const handleScroll = (e) => {
    if(window.scrollY > 100) {
      setheaderStyle({
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "rgb(9 30 66 / 15%) 0px 0.5rem 1rem 0px"
      });
    } else if (window.scrollY <= 100) {
      setheaderStyle([]);
    }
  };

  return(
    <div className="header-side" style={headerStyle}>
      <div className="logo-area">
        <span>Trello</span>      
      </div>

      <div className="button-area">
        {currentUser? 
          <div>
            <p>{ currentUser }</p> 
            <CustomButtonComponent 
              label="logOut" 
              title="button account-button button-green signup-redirect" 
              onClick={logout}>
            </CustomButtonComponent>
          </div>
        :
        <div>
          <ButtonComponent 
            label="Login" 
            path="login"  
            style={{ border: "1px solid transparent", marginRight: "3rem" }}/>

          <ButtonComponent 
            label="Signup" 
            path="signup"  
            style={{ border: "1px solid transparent" }}/> 
        </div>
        } 
      </div>
    </div>
  )
};

export default Header