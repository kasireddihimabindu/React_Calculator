import React from "react";
import Styles from "./ButtonBox.module.css";

const ButtonBox = ({ children }) => {
  return <div className= {Styles.buttonBox}>{children}</div>;
};

export default ButtonBox;