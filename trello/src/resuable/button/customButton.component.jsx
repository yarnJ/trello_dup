import React from "react";
import '../button/button.style.scss';

const CustomButtonComponent = (props) => {

  return(
    <button className={props.title} type={props.type} style={ props.style } onClick={ props.onClick }>
      { props.label }
    </button>
  )
};

export default CustomButtonComponent;